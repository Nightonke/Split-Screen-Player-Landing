import translations from "./guideKeywordTranslations.json";
import type { GuidePage } from "./guides";
import type { Locale } from "./locales";
import { tutorialSlug, tutorialTopics, type TutorialTopic } from "./tutorialTopics";

type KeywordGroup = keyof typeof translations["en-US"];
const localizedKeywords: Record<Locale, Record<KeywordGroup, readonly string[]>> = translations;

// Platform variants share topic keywords; platform filtering remains separate.
const guideGroups = new Map<string, KeywordGroup>([
  ["play-multiple-videos-iphone-ipad", "multi-video"],
  ["play-multiple-videos-android", "multi-video"],
  ["multi-camera-review-ipad", "multi-camera"],
  ["browse-two-websites-iphone-ipad", "websites"],
  ["browse-two-websites-android", "websites"],
  ["watch-video-and-browse-web-iphone-ipad", "video-web"],
  ["watch-video-and-browse-web-android", "video-web"],
  ["auto-arrange-portrait-landscape-videos-iphone-ipad", "smart-layout"],
  ["auto-arrange-portrait-landscape-videos-android", "smart-layout"],
  ["resize-rearrange-split-screen-videos-iphone-ipad", "resize-reorder"],
  ["resize-rearrange-split-screen-videos-android", "resize-reorder"],
  ["overlay-two-videos-iphone-ipad", "overlay"],
  ["overlay-two-videos-android", "overlay"],
]);

for (const topic of Object.keys(tutorialTopics) as TutorialTopic[]) {
  for (const platform of ["ios", "android"] as const) {
    guideGroups.set(tutorialSlug(topic, platform), topic);
  }
}

export function getGuideKeywords(slug: GuidePage["slug"], locale: Locale): readonly string[] {
  const group = guideGroups.get(slug);
  if (!group) throw new Error(`Missing guide keyword group: ${slug}`);
  const keywords = localizedKeywords[locale][group];
  if (!keywords || keywords.length < 1 || keywords.length > 3 ||
      keywords.some(keyword => !keyword.trim()) || new Set(keywords).size !== keywords.length) {
    throw new Error(`Guide requires 1–3 unique keywords: ${locale}/${slug}`);
  }
  return keywords;
}
