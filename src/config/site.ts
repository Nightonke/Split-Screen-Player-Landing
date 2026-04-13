import { socialLinks } from "./socialLinks";

export const storeDataConfig = {
	fetchRealData: false, // Set to true to fetch real data from App Store
	appStoreAppId: 686449807, // Numeric App ID (without "id" prefix)
};

export const siteConfig = {
	/** Your app name (displayed in header, footer, page title) */
	name: "Split Screen Player",

	/** Brief description of your app (shown in hero section and meta tags) */
	description:
		"Too many great videos to choose from? Why choose at all? You can watch them all at once! Split Screen Player lets you play up to 36 videos simultaneously, giving you a comprehensive overview.",

	/** SEO keywords for better search engine visibility */
	keywords: ["Coloray", "多彩日", "iOS", "mobile app", "landing page", "astro", "react", "typescript"],

	/** Path to your app logo/icon */
	logo: "/assets/favicon.png",

	/** App store download links */
	storeLinks: {
		apple: "https://apps.apple.com/app/id6743780736",
	},

	/** App rating and reviews */
	rating: {
		score: 5.0,
		count: "0",
	},

	/** Age rating (e.g., 4+, 12+, 17+) */
	ageRating: "4+",

	/** App version */
	version: "1.0.3",

	/** Minimum iOS version required */
	minimumOS: "15.0",

	/** Last update date */
	releaseDate: "Jan 28, 2026",

	/** Social media links (edit in socialLinks.ts) */
	socialLinks,
} as const;