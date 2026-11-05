import { locales, type Locale } from "./locales";
import policy from "./translationPolicy.json";

interface Dictionary { locale: Locale; translations: Record<string, string>; }
const dictionaries = import.meta.glob<Dictionary>("./coreTranslations/*.json", { eager: true, import: "default" });
const structuralKeys = new Set(policy.structuralKeys);

/** Missing copy fails the build instead of silently publishing an English page. */
export function localizeCore<T>(value: T, locale: Locale, key?: string): T {
  if (key && structuralKeys.has(key)) return value;
  if (typeof value === "string") {
    if (!/[A-Za-z]/.test(value) || /^(https?:\/\/|\/)/.test(value)) return value;
    const translated = dictionaries[`./coreTranslations/${locale}.json`]?.translations[value];
    if (!translated?.trim()) throw new Error(`Missing core translation (${locale}): ${value.slice(0, 120)}`);
    return translated as T;
  }
  if (Array.isArray(value)) return value.map(item => localizeCore(item, locale, key)) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([name, item]) => [name, localizeCore(item, locale, name)])) as T;
  }
  return value;
}

/** Keep existing editions; translate new editions lazily from final English copy. */
export function extendCoreContent<T>(existing: Record<string, T>, finalize?: (value: T, locale: Locale) => T): Record<Locale, T> {
  const result = { ...existing } as Record<Locale, T>;
  for (const locale of locales) {
    if (Object.hasOwn(existing, locale)) continue;
    let cached: T;
    Object.defineProperty(result, locale, {
      enumerable: true,
      get() {
        if (!cached) {
          const translated = localizeCore(existing["en-US"], locale);
          cached = finalize ? finalize(translated, locale) : translated;
        }
        return cached;
      },
    });
  }
  return result;
}
