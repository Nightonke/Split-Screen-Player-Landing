import { guideContent, guideSlugs, type GuidePage, type GuideImage } from "./guides";
import { getWebGuides } from "./webGuides";
import { getWorkflowGuides } from "./workflowGuides";
import { getOverlayGuides } from "./overlayGuides";
import { getTutorialGuides } from "./tutorialGuides";
import { androidMultiVideoGuides } from "./localizedMultiVideoGuides";
import { getLanguageLinks, isGuideLocale, isGuidePublished, type Locale } from "./locales";
import { getGuideKeywords } from "./guideKeywords";

export type CatalogGuide = GuidePage & { keywords: readonly string[] };

const translatedPages = import.meta.glob<CatalogGuide>("./guideTranslations/*/*.json", { eager: true, import: "default" });
import availability from "./guideAvailability.json";

function englishScreenshot(image: GuideImage | undefined): GuideImage | undefined {
  return image && { ...image, src: image.src.replace("/zh-Hans/", "/en/") };
}

// Register language-specific additions without generating untranslated routes.
export function getGuides(locale: Locale): CatalogGuide[] {
  if (!isGuideLocale(locale)) {
    const slugs = (availability as Partial<Record<Locale, string | string[]>>)[locale];
    if (!slugs) return [];
    if (!Array.isArray(slugs)) throw new Error(`List completed guide slugs explicitly for ${locale}`);
    return slugs.map(slug => {
      const page = translatedPages[`./guideTranslations/${locale}/${slug}.json`];
      if (!page || page.slug !== slug || !page.keywords?.length) throw new Error(`Incomplete published guide: ${locale}/${slug}`);
      return page;
    });
  }
  const pages = guideSlugs.map(slug => guideContent[locale].pages[slug]);
  pages.splice(1, 0, androidMultiVideoGuides[locale]);
  const allPages = [...pages, ...getWebGuides(locale), ...getWorkflowGuides(locale), ...getOverlayGuides(locale), ...getTutorialGuides(locale)];
  return [...new Map(allPages.map(page => [page.slug, page])).values()].filter(page => isGuidePublished(locale, page.slug)).map(page => ({
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
