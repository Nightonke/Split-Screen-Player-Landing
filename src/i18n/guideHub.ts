import { guideContent } from "./guides";
import { isGuideLocale, type Locale } from "./locales";
import { localizeCore } from "./coreTranslation";

export const englishGuideEntry = {
  title: "Practical guides",
  description: "Learn to play, compare, and export videos with step-by-step tutorials. The guide library is currently available in English. You can explore the features below in your language.",
  englishGuides: "Browse guides in English",
  features: "Explore features",
  readInEnglish: "Read in English",
};

export function getGuideHub(locale: Locale) {
  const source = guideContent[isGuideLocale(locale) ? locale : "en-US"];
  const hub = { hub: source.hub, labels: source.labels };
  return isGuideLocale(locale) ? hub : localizeCore(hub, locale);
}

export function getGuideEntry(locale: Locale) {
  return locale === "en-US" ? englishGuideEntry : localizeCore(englishGuideEntry, locale);
}
