import { guideContent, guideSlugs, type GuidePage, type GuideImage } from "./guides";
import { getWebGuides } from "./webGuides";
import { getWorkflowGuides } from "./workflowGuides";
import { getOverlayGuides } from "./overlayGuides";
import { getTutorialGuides } from "./tutorialGuides";
import { androidMultiVideoGuides } from "./localizedMultiVideoGuides";
import { getLanguageLinks, type Locale } from "./locales";
import { getGuideKeywords } from "./guideKeywords";

export type CatalogGuide = GuidePage & { keywords: readonly string[] };

function englishScreenshot(image: GuideImage | undefined): GuideImage | undefined {
  return image && { ...image, src: image.src.replace("/zh-Hans/", "/en/") };
}

// Register language-specific additions without generating untranslated routes.
export function getGuides(locale: Locale): CatalogGuide[] {
  const pages = guideSlugs.map(slug => guideContent[locale].pages[slug]);
  pages.splice(1, 0, androidMultiVideoGuides[locale]);
  const allPages = [...pages, ...getWebGuides(locale), ...getWorkflowGuides(locale), ...getOverlayGuides(locale), ...getTutorialGuides(locale)];
  return [...new Map(allPages.map(page => [page.slug, page])).values()].map(page => ({
    ...page,
    keywords: getGuideKeywords(page.slug, locale),
    heroImage: englishScreenshot(page.heroImage),
    steps: page.steps.map(step => ({ ...step, image: englishScreenshot(step.image) })),
  }));
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
