import { readFile, readdir } from "node:fs/promises";
import { createHash } from "node:crypto";
import { loadEnglishGuides } from "./export-guide-source.mjs";

const registry = JSON.parse(await readFile("src/i18n/localeRegistry.json", "utf8"));
const availability = JSON.parse(await readFile("src/i18n/guideAvailability.json", "utf8"));
const policy = JSON.parse(await readFile("scripts/guide-translation-policy.json", "utf8"));
const corePolicy = JSON.parse(await readFile("src/i18n/translationPolicy.json", "utf8"));
const sources = await loadEnglishGuides();
const structural = new Set(policy.structuralKeys);
const terms = [...new Set([...policy.invariantTerms, ...corePolicy.invariantTerms])].sort((a, b) => b.length - a.length);
const protectedTerms = new RegExp(terms.map(term => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"), "g");
const errors = [];
const assert = (condition, message) => { if (!condition) errors.push(message); };
const counts = values => JSON.stringify([...values.reduce((map, value) => map.set(value, (map.get(value) ?? 0) + 1), new Map())].sort());
const numbers = value => value.match(/\d+/g) ?? [];
const numberWords = { one: "1", two: "2", three: "3", four: "4", five: "5", six: "6", seven: "7", eight: "8", nine: "9", ten: "10" };
function preservesNumbers(source, translated) {
  const required = numbers(source);
  const allowed = [...required, ...(source.toLowerCase().match(/\b(?:one|two|three|four|five|six|seven|eight|nine|ten)\b/g) ?? []).map(word => numberWords[word])];
  const actual = numbers(translated);
  const count = (values, number) => values.filter(value => value === number).length;
  // Translators may use digits for spelled-out counts ("two-by-two" → "2×2").
  return [...new Set([...required, ...actual])].every(number => count(actual, number) >= count(required, number) && count(actual, number) <= count(allowed, number));
}
let pages = 0, strings = 0;

function compare(source, translated, location, key) {
  if (structural.has(key) || typeof source === "number" || typeof source === "boolean") {
    assert(JSON.stringify(source) === JSON.stringify(translated), `${location}: changed structure, asset, link or parameter`);
    return;
  }
  if (typeof source === "string") {
    strings++;
    if (typeof translated !== "string" || !translated.trim()) {
      errors.push(`${location}: missing translation`);
      return;
    }
    assert(!/ZXQ\d|XQZ|__SSP_|<\/?(?:span|div)\b|\{[A-Za-z]\w*\}/.test(translated), `${location}: unresolved markup or copy token`);
    assert(counts(source.match(protectedTerms) ?? []) === counts(translated.match(protectedTerms) ?? []), `${location}: changed protected product name or format`);
    assert(preservesNumbers(source, translated), `${location}: changed numeric facts`);
    const meaningful = source.replace(protectedTerms, "").replace(/[^A-Za-z]/g, "");
    assert(!meaningful || source !== translated, `${location}: untranslated English copy`);
    return;
  }
  if (Array.isArray(source)) {
    if (!Array.isArray(translated)) { errors.push(`${location}: missing list`); return; }
    assert(source.length === translated.length, `${location}: changed list length`);
    source.forEach((item, index) => compare(item, translated[index], `${location}[${index}]`, key));
    return;
  }
  if (source && typeof source === "object") {
    if (!translated || typeof translated !== "object" || Array.isArray(translated)) { errors.push(`${location}: missing object`); return; }
    assert(JSON.stringify(Object.keys(source).sort()) === JSON.stringify(Object.keys(translated).filter(name => name !== "_translation").sort()), `${location}: missing or unexpected fields`);
    for (const [name, item] of Object.entries(source)) compare(item, translated[name], `${location}.${name}`, name);
  }
}

for (const [locale, meta] of Object.entries(registry)) {
  if (meta.legacyGuideSource) continue;
  const slugs = availability[locale] ?? [];
  assert(Array.isArray(slugs) && new Set(slugs).size === slugs.length, `${locale}: expected unique published slugs`);
  if (!Array.isArray(slugs)) continue;
  const files = await readdir(`src/i18n/guideTranslations/${locale}`).catch(error => {
    if (error.code !== "ENOENT") throw error;
    return [];
  });
  for (const slug of slugs) assert(files.includes(`${slug}.json`), `${locale}/${slug}: missing published translation`);
  for (const file of files.filter(file => file.endsWith(".json"))) {
    const slug = file.slice(0, -5);
    const source = sources[slug];
    if (!source) { errors.push(`${locale}/${slug}: unknown English source`); continue; }
    const translated = JSON.parse(await readFile(`src/i18n/guideTranslations/${locale}/${file}`, "utf8"));
    const digest = createHash("sha256").update(JSON.stringify(source)).digest("hex");
    assert(translated._translation?.sourceDigest === digest, `${locale}/${slug}: English source changed; update and review translation`);
    compare(source, translated, `${locale}/${slug}`);
    pages++;
  }
}
if (errors.length) throw new Error(errors.join("\n"));
console.log(`Guide copy checks passed: ${pages} additional translations, ${strings} text fields, source freshness, complete structure, facts and assets.`);
