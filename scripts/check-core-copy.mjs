import { readFile } from "node:fs/promises";

const registry = JSON.parse(await readFile("src/i18n/localeRegistry.json", "utf8"));
const errors = [];
let checked = 0;
const counts = values => JSON.stringify([...values.reduce((map, value) => map.set(value, (map.get(value) ?? 0) + 1), new Map())].sort());
const numbers = value => value.split("\n").filter(line => !line.startsWith("**")).join("\n").match(/\d+(?:\.\d+)?/g) ?? [];
for (const [locale, meta] of Object.entries(registry)) {
  if (meta.legacyGuideSource) continue;
  const dictionary = JSON.parse(await readFile(`src/i18n/coreTranslations/${locale}.json`, "utf8"));
  if (dictionary.locale !== locale) errors.push(`${locale}: dictionary locale mismatch`);
  for (const [source, translated] of Object.entries(dictionary.translations)) {
    checked++;
    const label = `${locale}: ${source.slice(0, 85)}`;
    if (typeof translated !== "string" || !translated.trim() || /ZXQ\d|XQZ|__SSP_/.test(translated)) errors.push(`${label}: empty or unresolved translation`);
    // Month names can become numbers in localized dates; date lines are excluded.
    // Words such as "three" can also become digits without changing the meaning.
    if (numbers(source).length && counts(numbers(source)) !== counts(numbers(translated))) errors.push(`${label}: changed numeric facts`);
    const tokens = value => value.match(/\{[A-Za-z]\w*\}|https?:\/\/[^\s)]+|[\w.+-]+@[\w.-]+\.[A-Za-z]+/g) ?? [];
    if (counts(tokens(source)) !== counts(tokens(translated))) errors.push(`${label}: changed variable, URL or email`);
    if (source.startsWith("#") && counts(source.match(/^#{1,6} /gm) ?? []) !== counts(translated.match(/^#{1,6} /gm) ?? [])) errors.push(`${label}: changed Markdown heading structure`);
  }
}
if (errors.length) throw new Error(errors.join("\n"));
console.log(`Core copy checks passed: ${checked} translations, numeric facts, placeholders, links and Markdown headings.`);
