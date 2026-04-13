import { socialLinks } from "./socialLinks";

export const storeDataConfig = {
	fetchRealData: false, // Set to true to fetch real data from App Store
	appStoreAppId: 6758291951, // Numeric App ID (without "id" prefix)
};

export const siteConfig = {
	/** Your app name (displayed in header, footer, page title) */
	name: "Split Screen Player",

	/** Brief description of your app (shown in hero section and meta tags) */
	description:
		"Too many great videos to choose from? Why choose at all? You can watch them all at once! Split Screen Player lets you play up to 36 videos simultaneously, giving you a comprehensive overview.",

	/** SEO keywords for better search engine visibility */
	keywords: ["Split Screen Player-Dual Video", "Play Multiple Videos Parallel", "multi","window","playback","together","multitasking","grid","pip","sync","view","download","web","save","browser","sniffer","分屏","多窗","多视频","同时","播放","双屏","多屏","同屏","多任务","九宫格","画中画","同步","并排","并行","浏览器","追剧","监控","对比","分栏","小窗","投屏","网页","视频","下载","离线","缓存","提取","抓取","嗅探","网址","多开","万能"],

	/** Path to your app logo/icon */
	logo: "/assets/favicon.png",

	/** App store download links */
	storeLinks: {
		apple: "https://apps.apple.com/app/id6758291951",
	},

	/** App rating and reviews */
	rating: {
		score: 4.9,
		count: "9",
	},

	/** Age rating (e.g., 4+, 12+, 17+) */
	ageRating: "4+",

	/** App version */
	version: "1.0.11",

	/** Minimum iOS version required */
	minimumOS: "15.0",

	/** Last update date */
	releaseDate: "April 13, 2026",

	/** Social media links (edit in socialLinks.ts) */
	socialLinks,
} as const;