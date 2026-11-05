"""Generate cached translation drafts for the public core website copy.

Usage: python3 scripts/generate-core-translations.py /tmp/ssp-core-source.json
The build never calls a translation service. Review generated copy before release.
Existing entries are reused; remove an entry explicitly to regenerate it.
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
POLICY = json.loads((ROOT / 'src/i18n/translationPolicy.json').read_text())
CONTEXT = json.loads((ROOT / 'scripts/translation-context.json').read_text())
REGISTRY = json.loads((ROOT / 'src/i18n/localeRegistry.json').read_text())
EXISTING = {locale for locale, meta in REGISTRY.items() if meta['legacyGuideSource']}
SOURCE = json.loads(Path(sys.argv[1]).read_text())
OUT = ROOT / 'src/i18n/coreTranslations'
OUT.mkdir(exist_ok=True)
STOP = threading.Event()

def collect(value, key=None):
    if key in POLICY['structuralKeys']:
        return []
    if isinstance(value, str):
        return [value] if re.search('[A-Za-z]', value) and not re.match(r'^(https?://|/)', value) else []
    if isinstance(value, list):
        return [text for item in value for text in collect(item, key)]
    if isinstance(value, dict):
        return [text for name, item in value.items() for text in collect(item, name)]
    return []

STRINGS = sorted(set(collect(SOURCE)))
DIGEST = hashlib.sha256(json.dumps(STRINGS, ensure_ascii=False).encode()).hexdigest()
protected = re.compile('|'.join([r'https?://[^\s)]+', r'[\w.+-]+@[\w.-]+\.[A-Za-z]+', r'\{[A-Za-z]\w*\}', r'\\n'] + [re.escape(x) for x in POLICY['invariantTerms']] + [r'\d+(?:[:.,/–×-]\d+)*(?:[%Kk]|\s?fps)?']))

def protect(text):
    # Keep real words and numbers visible to the translation model. Opaque numeric
    # tokens can change sentence order (for example "videos 36" instead of "36 videos").
    tokens, parts, position = [], [], 0
    for match in protected.finditer(text):
        parts.append(html.escape(text[position:match.start()]))
        tokens.append(match.group())
        parts.append('<span translate="no" class="notranslate">' + html.escape(match.group()) + '</span>')
        position = match.end()
    parts.append(html.escape(text[position:]))
    return '<div>' + ''.join(parts).replace('\n', '<br>') + '</div>', tokens

class TranslationHTML(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.parts, self.protected_values, self.current = [], [], None
    def handle_starttag(self, tag, attrs):
        if tag == 'br':
            self.parts.append('\n')
        if tag == 'span' and dict(attrs).get('class') == 'notranslate':
            self.current = []
    def handle_endtag(self, tag):
        if tag == 'span' and self.current is not None:
            self.protected_values.append(''.join(self.current))
            self.current = None
    def handle_data(self, data):
        self.parts.append(data)
        if self.current is not None:
            self.current.append(data)

def restore(text, tokens):
    parsed = TranslationHTML()
    parsed.feed(text)
    if Counter(tokens) != Counter(parsed.protected_values):
        raise ValueError('translation lost or repeated a protected value')
    text = re.sub(r'[ \t]+([,.;!?])', r'\1', ''.join(parsed.parts))
    return '\n'.join(line.strip() for line in text.splitlines()).strip()

def translate_batch(strings, locale):
    prepared = [protect(CONTEXT.get(text, text)) for text in strings]
    params = [('client', 'dict-chrome-ex'), ('sl', 'en'), ('tl', {'fil':'tl', 'nb':'no'}.get(locale, locale)), ('format', 'html')]
    params += [('q', text) for text, _ in prepared]
    url = 'https://clients5.google.com/translate_a/t?' + urllib.parse.urlencode(params)
    for attempt in range(4):
        try:
            with urllib.request.urlopen(url, timeout=30) as response:
                values = json.load(response)
            if not isinstance(values, list) or len(values) != len(strings):
                raise ValueError('translation batch size mismatch')
            restored = []
            for source, value, (_, tokens) in zip(strings, values, prepared):
                try:
                    restored.append(restore(value, tokens))
                except ValueError:
                    # Dense technical lists can confuse placeholder-based translation.
                    # Retry their original text and accept only exact factual parity.
                    raw_params = [('client', 'dict-chrome-ex'), ('sl', 'en'), ('tl', {'fil':'tl', 'nb':'no'}.get(locale, locale)), ('q', source)]
                    raw_url = 'https://clients5.google.com/translate_a/t?' + urllib.parse.urlencode(raw_params)
                    with urllib.request.urlopen(raw_url, timeout=30) as response:
                        raw = html.unescape(json.load(response)[0])
                    if Counter(protected.findall(source)) != Counter(protected.findall(raw)):
                        Path(f'/tmp/ssp-translation-error-{locale}.json').write_text(json.dumps({'source':source, 'result':raw, 'tokens':tokens}, ensure_ascii=False, indent=2))
                        raise ValueError('Translation changed a product fact or protected term')
                    restored.append(raw)
            return restored
        except urllib.error.HTTPError as error:
            if error.code == 429:
                STOP.set()
                raise RuntimeError('Translation service rate limit; stop and retry later.') from error
            if attempt == 3:
                raise
        except (OSError, ValueError):
            if attempt == 3:
                raise
        time.sleep(2 ** attempt)

def generate(locale):
    target = OUT / f'{locale}.json'
    saved = json.loads(target.read_text()) if target.exists() else {}
    translations = saved.get('translations', {})
    missing = [text for text in STRINGS if text not in translations or (REFRESH_NUMERIC and re.search(r'\d', text) and text not in saved.get('reviewedKeys', [])) or (REFRESH_CONTEXT and text in CONTEXT)]
    batches, batch, size = [], [], 0
    for text in missing:
        length = len(urllib.parse.quote_plus(protect(text)[0])) + 3
        if batch and size + length > 6500:
            batches.append(batch)
            batch, size = [], 0
        batch.append(text)
        size += length
    if batch:
        batches.append(batch)
    def save():
        target.write_text(json.dumps({**saved, 'locale':locale, 'sourceDigest':DIGEST, 'translations':dict(sorted(translations.items()))}, ensure_ascii=False, indent=2) + '\n')
    for batch in batches:
        if STOP.is_set():
            raise RuntimeError('Stopped after a translation service rate limit')
        values = translate_batch(batch, locale)
        translations.update((source, re.sub(r'^(#{1,6})([^#\s])', r'\1 \2', value, flags=re.M) if source.startswith('#') else value) for source, value in zip(batch, values))
        save()
        time.sleep(0.4)
    save()
    return f'{locale}: {len(translations)} strings, {len(batches)} batches'

arguments = sys.argv[2:]
REFRESH_NUMERIC = '--refresh-numeric' in arguments
REFRESH_CONTEXT = '--refresh-context' in arguments
selected = [arg for arg in arguments if arg not in ['--refresh-numeric', '--refresh-context']] or [locale for locale in REGISTRY if locale not in EXISTING]
print(f'Source: {len(STRINGS)} strings; generating {len(selected)} locales.', flush=True)
errors = []
with concurrent.futures.ThreadPoolExecutor(max_workers=3) as executor:
    jobs = {executor.submit(generate, locale):locale for locale in selected}
    for job in concurrent.futures.as_completed(jobs):
        try:
            print(job.result(), flush=True)
        except Exception as error:
            errors.append(jobs[job])
            print(f'ERROR {jobs[job]}: {error}', flush=True)
if errors:
    raise SystemExit(f'Incomplete translations: {", ".join(errors)}')
