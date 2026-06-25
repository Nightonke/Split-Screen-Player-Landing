import { socialLinks } from "./socialLinks";

export const storeDataConfig = {
	fetchRealData: false, // Set to true to fetch real data from App Store
	appStoreAppId: 6758291951, // Numeric App ID (without "id" prefix)
};

export const siteConfig = {
	/** App name displayed in the header, footer, and page title */
	name: "Split Screen Player: 36 Videos",

	/** Brief app description shown in the hero section and meta tags */
	description:
		"Play, compare, sync, and export multiple videos on one screen. Watch up to 36 videos, choose from 134 layouts, and turn split-screen views into shareable videos.",

	/** SEO keywords for better search engine visibility */
	keywords: [
		"split screen player",
		"36 videos",
		"multi video player",
		"134 layouts",
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
		apple: "https://apps.apple.com/app/id6758291951",
	},

	/** App rating and reviews */
	rating: {
		score: 4.5,
		count: "15",
	},

	/** Age rating (e.g., 4+, 12+, 17+) */
	ageRating: "4+",

	/** App version */
	version: "1.0.20",

	/** Minimum iOS version required */
	minimumOS: "15.0",

	/** Last update date */
	releaseDate: "June 25, 2026",

	/** Social media links (edit in socialLinks.ts) */
	socialLinks,
} as const;
