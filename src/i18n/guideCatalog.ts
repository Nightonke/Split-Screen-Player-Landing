import { guideContent, guideSlugs, type GuidePage } from "./guides";
import { getWebGuides } from "./webGuides";
import { getWorkflowGuides } from "./workflowGuides";
import { androidMultiVideoGuides } from "./localizedMultiVideoGuides";
import { getLanguageLinks, type Locale } from "./locales";

// Register language-specific additions without generating untranslated routes.
export function getGuides(locale: Locale): GuidePage[] {
  const pages = guideSlugs.map(slug => guideContent[locale].pages[slug]);
  pages.splice(1, 0, androidMultiVideoGuides[locale]);
  return [...pages, ...getWebGuides(locale), ...getWorkflowGuides(locale)];
}
export function getGuide(locale: Locale, slug: GuidePage["slug"]): GuidePage {
  const guide = getGuides(locale).find(page => page.slug === slug);
  if (!guide) throw new Error(`Guide not available: ${locale}/${slug}`);
  return guide;
}
export function getGuideLanguageLinks(locale: Locale, slug: GuidePage["slug"]) {
  return getLanguageLinks(locale, `guides/${slug}`).filter(link =>
    getGuides(link.locale as Locale).some(page => page.slug === slug),
  );
}
