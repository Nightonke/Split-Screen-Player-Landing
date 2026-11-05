"""Author complete guide translations; never runs during builds or page visits.

Usage: python3 scripts/generate-guide-translations.py SOURCE.json [LOCALE ...]
Existing page edits are preserved. Source changes require explicit retranslation.
No publication manifest is changed by this command.
"""
import concurrent.futures
from collections import Counter
import hashlib
import html
from html.parser import HTMLParser
import json
from pathlib import Path
import re
import sys
import threading
import time
import urllib.error
import urllib.parse
import urllib.request

ROOT = Path(__file__).resolve().parents[1]
POLICY = json.loads((ROOT / 'scripts/guide-translation-policy.json').read_text())
CORE_POLICY = json.loads((ROOT / 'src/i18n/translationPolicy.json').read_text())
CONTEXT = json.loads((ROOT / 'scripts/guide-translation-context.json').read_text())
REGISTRY = json.loads((ROOT / 'src/i18n/localeRegistry.json').read_text())
OUT = ROOT / 'src/i18n/guideTranslations'
STOP = threading.Event()
TERMS = sorted(set(POLICY['invariantTerms'] + CORE_POLICY['invariantTerms']), key=len, reverse=True)
PROTECTED = re.compile('|'.join([r'https?://[^\s)]+', r'\{[A-Za-z]\w*\}'] + [re.escape(term) for term in TERMS] + [r'\d+(?:[:.,/–×-]\d+)*']))


def source_digest(guide):
    # Hash a compact, ordered JSON representation shared with the JS validator.
    return hashlib.sha256(json.dumps(guide, ensure_ascii=False, separators=(',', ':')).encode()).hexdigest()


def collect(value, key=None):
    if key in POLICY['structuralKeys']:
        return []
    if isinstance(value, str):
        return [value]
    if isinstance(value, list):
        return [text for item in value for text in collect(item, key)]
    if isinstance(value, dict):
        return [text for name, item in value.items() for text in collect(item, name)]
    return []


def localize(value, translations, key=None):
    if key in POLICY['structuralKeys']:
        return value
    if isinstance(value, str):
        return translations[value]
    if isinstance(value, list):
        return [localize(item, translations, key) for item in value]
    if isinstance(value, dict):
        return {name: localize(item, translations, name) for name, item in value.items()}
    return value


def protect(text):
    parts, tokens, position = [], [], 0
    for match in PROTECTED.finditer(text):
        parts.append(html.escape(text[position:match.start()]))
        tokens.append(match.group())
        parts.append('<span translate="no" class="notranslate">' + html.escape(match.group()) + '</span>')
        position = match.end()
    parts.append(html.escape(text[position:]))
    return '<div>' + ''.join(parts) + '</div>', tokens


class TranslationHTML(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.parts, self.tokens, self.current = [], [], None

    def handle_starttag(self, tag, attrs):
        if tag == 'span' and dict(attrs).get('class') == 'notranslate':
            self.current = []

    def handle_endtag(self, tag):
        if tag == 'span' and self.current is not None:
            self.tokens.append(''.join(self.current))
            self.current = None

    def handle_data(self, data):
        self.parts.append(data)
        if self.current is not None:
            self.current.append(data)


def translate_batch(strings, locale):
    prepared = [protect(CONTEXT.get(text, text)) for text in strings]
    params = [('client', 'dict-chrome-ex'), ('sl', 'en'), ('tl', {'fil': 'tl', 'nb': 'no'}.get(locale, locale)), ('format', 'html')]
    params += [('q', text) for text, _ in prepared]
    url = 'https://clients5.google.com/translate_a/t?' + urllib.parse.urlencode(params)
    for attempt in range(4):
        if STOP.is_set():
            raise RuntimeError('Stopped after a translation service rate limit')
        try:
            with urllib.request.urlopen(url, timeout=30) as response:
                values = json.load(response)
            if not isinstance(values, list) or len(values) != len(strings):
                raise ValueError('Translation batch size mismatch')
            translated = []
            for value, (_, tokens) in zip(values, prepared):
                parser = TranslationHTML()
                parser.feed(value)
                if Counter(tokens) != Counter(parser.tokens):
                    raise ValueError('Translation changed a protected product fact or name')
                text = re.sub(r'[ \t]+([,.;!?])', r'\1', ''.join(parser.parts)).strip()
                if not text or '<span' in text:
                    raise ValueError('Empty or unresolved translation')
                translated.append(text)
            return translated
        except urllib.error.HTTPError as error:
            if error.code == 429:
                STOP.set()
                raise RuntimeError('Translation service rate limit; stop and retry later') from error
            if attempt == 3:
                raise
        except (OSError, ValueError):
            if attempt == 3:
                raise
        time.sleep(2 ** attempt)


def generate(locale, sources):
    if locale not in REGISTRY or REGISTRY[locale]['legacyGuideSource']:
        raise ValueError(f'Not an additional guide locale: {locale}')
    directory = OUT / locale
    directory.mkdir(parents=True, exist_ok=True)
    remaining = {}
    for slug, guide in sources.items():
        target = directory / f'{slug}.json'
        if target.exists():
            existing = json.loads(target.read_text())
            if existing.get('_translation', {}).get('sourceDigest') != source_digest(guide):
                raise ValueError(f'{slug}: English source changed; review existing translation explicitly')
        else:
            remaining[slug] = guide
    if not remaining:
        return f'{locale}: existing pages preserved'
    # Reuse shared labels, and cache successful batches outside the repository.
    strings = sorted(set(collect(remaining)))
    digest = hashlib.sha256(json.dumps([strings, CONTEXT], ensure_ascii=False).encode()).hexdigest()
    cache_path = Path('/tmp') / f'ssp-guide-translations-{locale}-{digest[:16]}.json'
    translations = json.loads(cache_path.read_text()) if cache_path.exists() else {}
    core = json.loads((ROOT / f'src/i18n/coreTranslations/{locale}.json').read_text())['translations']
    for text in strings:
        if text not in translations and text in core:
            translations[text] = core[text]
        if not PROTECTED.sub('', text).strip(' /·—–-'):
            translations[text] = text
    batches, batch, size = [], [], 0
    for text in strings:
        if text in translations:
            continue
        length = len(urllib.parse.quote_plus(protect(text)[0])) + 3
        if batch and size + length > 6500:
            batches.append(batch)
            batch, size = [], 0
        batch.append(text)
        size += length
    if batch:
        batches.append(batch)
    for batch in batches:
        translations.update(zip(batch, translate_batch(batch, locale)))
        cache_path.write_text(json.dumps(translations, ensure_ascii=False, indent=2) + '\n')
        time.sleep(0.4)
    for slug, guide in remaining.items():
        page = localize(guide, translations)
        page['_translation'] = {'sourceDigest': source_digest(guide), 'method': 'machine-assisted'}
        target = directory / f'{slug}.json'
        temporary = target.with_suffix('.json.tmp')
        temporary.write_text(json.dumps(page, ensure_ascii=False, indent=2) + '\n')
        temporary.replace(target)
    return f'{locale}: {len(remaining)} complete guides, {len(strings)} strings, {len(batches)} batches'


if __name__ == '__main__':
    sources = json.loads(Path(sys.argv[1]).read_text())
    selected = sys.argv[2:] or [locale for locale, meta in REGISTRY.items() if not meta['legacyGuideSource']]
    print(f'Generating {len(sources)} guides × {len(selected)} locales.', flush=True)
    errors = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=3) as executor:
        jobs = {executor.submit(generate, locale, sources): locale for locale in selected}
        for job in concurrent.futures.as_completed(jobs):
            try:
                print(job.result(), flush=True)
            except Exception as error:
                errors.append(jobs[job])
                print(f'ERROR {jobs[job]}: {error}', flush=True)
    if errors:
        raise SystemExit(f'Incomplete translations: {", ".join(errors)}')
