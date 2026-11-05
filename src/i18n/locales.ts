import type { generatedTranslations } from "./generatedTranslations";
import registry from "./localeRegistry.json";
import guideAvailability from "./guideAvailability.json";

export const defaultLocale = "en-US" as const;
export type Locale = keyof typeof registry;
export type GuideLocale = "en-US" | "zh-Hans" | "zh-Hant" | keyof typeof generatedTranslations;
export const locales = Object.keys(registry) as Locale[];
export const guideLocales = locales.filter(isGuideLocale);
export const localeMeta = registry;

export function isGuideLocale(locale: Locale): locale is GuideLocale {
  return registry[locale].legacyGuideSource;
}

/** An absent entry means no guide routes; arrays enable publishing individual guides. */
export function isGuidePublished(locale: Locale, slug: string): boolean {
  const availability = (guideAvailability as Partial<Record<Locale, "all" | string[]>>)[locale];
  return availability === "all" || (Array.isArray(availability) && availability.includes(slug));
}

export const localeDetectionEntries = locales.flatMap((locale) =>
  localeMeta[locale].languagePrefixes.map((prefix) => [prefix, locale] as const),
).sort(([left], [right]) => right.length - left.length);

export const localizedPath = (locale: Locale, page = "") => {
  const cleanPage = page.replace(/^\/|\/$/g, "");
  const suffix = cleanPage ? `${cleanPage}/` : "";
  return locale === defaultLocale ? `/${suffix}` : `/${locale}/${suffix}`;
};

export const getLanguageLinks = (activeLocale: Locale, page = "") =>
  locales
    .filter(locale => !page.startsWith("guides/") || isGuidePublished(locale, page.slice(7)))
    .map((locale) => ({
      locale,
      label: localeMeta[locale].label,
      href: localizedPath(locale, page),
      hrefLang: localeMeta[locale].hrefLang,
      isActive: locale === activeLocale,
    }));
