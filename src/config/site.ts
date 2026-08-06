import { socialLinks } from "./socialLinks";
import { appFacts } from "./appFacts";

export const storeDataConfig = {
	fetchRealData: false, // Set to true to fetch real data from App Store
	appStoreAppId: appFacts.appStoreAppId, // Numeric App ID (without "id" prefix)
};

export const siteConfig = {
	/** App name displayed in the header, footer, and page title */
	name: "Split Screen Player: 36 Videos",

	/** Brief app description shown in the hero section and meta tags */
	description:
		`Play, compare, sync, and export multiple videos on one screen. Watch up to ${appFacts.maxVideos} videos, choose from ${appFacts.layoutCount} layouts, and turn split-screen views into shareable videos.`,

	/** SEO keywords for better search engine visibility */
	keywords: [
		"split screen player",
		`${appFacts.maxVideos} videos`,
		"multi video player",
		`${appFacts.layoutCount} layouts`,
		"video sync",
		"compare videos",
		"split screen export",
		"IPTV",
		"Xtream Codes",
		"M3U8",
		"RTSP",
		"web video download",
		"分屏",
		"多视频",
		"同步",
		"分屏导出",
	],

	/** Path to the app logo/icon */
	logo: "/assets/favicon.png",

	/** App store download links */
	storeLinks: {
		apple: appFacts.appStoreUrl,
	},

	/** App rating and reviews */
	rating: appFacts.rating,

	/** Age rating (e.g., 4+, 12+, 17+) */
	ageRating: appFacts.ageRating,

	/** App version */
	version: appFacts.version,

	/** Minimum iOS version required */
	minimumOS: appFacts.minimumOS,

	/** Last update date */
	releaseDate: appFacts.releaseDateLabel,

	/** Social media links (edit in socialLinks.ts) */
	socialLinks,
} as const;
