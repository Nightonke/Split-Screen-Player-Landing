import translations from "./multiVideoRecommendationsCopy.json";
import type { CatalogGuide } from "./guideCatalog";
import type { GuidePage } from "./guides";
import type { Locale } from "./locales";

type RecommendationId = keyof typeof translations["en-US"]["descriptions"];
type GroupId = keyof typeof translations["en-US"]["groups"];
type RecommendationCopy = {
  title: string;
  toc: string;
  groups: Record<GroupId, string>;
  descriptions: Record<RecommendationId, string>;
};
const copy: Record<Locale, RecommendationCopy> = translations;
const groups = [
  { id: "viewing", items: [
    { id: "layout", slug: "auto-arrange-portrait-landscape-videos-iphone-ipad" },
    { id: "resize", slug: "resize-rearrange-split-screen-videos-iphone-ipad" },
    { id: "audio", slug: "listen-to-one-video-at-a-time-iphone-ipad" },
  ] },
  { id: "comparison", items: [
    { id: "sync", slug: "sync-videos-different-start-times" },
    { id: "frames", slug: "compare-sports-videos-frame-by-frame" },
    { id: "overlay", slug: "overlay-two-videos-iphone-ipad" },
  ] },
  { id: "saving", items: [
    { id: "bookmarks", slug: "save-restore-video-workspace-iphone-ipad" },
    { id: "export", slug: "export-split-screen-video" },
    { id: "web", slug: "watch-video-and-browse-web-iphone-ipad" },
  ] },
] as const satisfies readonly { id: GroupId; items: readonly { id: RecommendationId; slug: GuidePage["slug"] }[] }[];

export function getMultiVideoRecommendations(locale: Locale, pages: CatalogGuide[], platform: "ios" | "android") {
  const localized = copy[locale];
  const resolvedGroups = groups.map(group => ({
    id: group.id,
    title: localized.groups[group.id],
    items: group.items.map(item => {
      const source = pages.find(page => page.slug === item.slug);
      // Use the existing platform pair so legacy iOS URLs also resolve to their Android guide.
      const page = platform === "ios" ? source : pages.find(page => page.slug === source?.otherPlatformSlug);
      if (!page || (page.platform ?? "ios") !== platform) {
        throw new Error(`Missing ${platform} recommendation: ${locale}/${item.slug}`);
      }
      return { id: item.id, page, description: localized.descriptions[item.id] };
    }),
  }));
  const items = resolvedGroups.flatMap(group => group.items);
  // These feature positions cover layout, mixed media and sync in all nine translations.
  const featureTopics: Record<number, RecommendationId> = { 1: "resize", 2: "web", 4: "sync" };
  const featureLinks = Object.fromEntries(Object.entries(featureTopics).map(([index, id]) => {
    const { page } = items.find(item => item.id === id)!;
    return [index, { label: page.title, path: `guides/${page.slug}` }];
  }));
  return { title: localized.title, toc: localized.toc, groups: resolvedGroups, featureLinks };
}
