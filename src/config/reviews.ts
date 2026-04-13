import type { Review } from "@/types/content";

/**
 * User reviews configuration
 * 
 * Display customer testimonials and ratings.
 * Each review should include:
 * - author: Name or initials (e.g., "John D.")
 * - rating: Number from 1 to 5
 * - text: Review content (2-3 sentences recommended)
 * 
 * Tip: Mix ratings (1-5 stars) for authenticity
 */
export const reviews: Review[] = [
	{
		author: "Promo022",
		rating: 5,
		text: "Does what it advertises",
	},
	{
		author: "jamannalalsnna",
		rating: 5,
		text: "It was great using this app. I definety enjoyed it.",
	},
	{
		author: "KeepGoingWhatever",
		rating: 5,
		text: "I’ve been searching for an app that lets me watch multiple movies at one screen-watching just one doesn’t cut it anymore…",
	},
	{
		author: "仁哥12345",
		rating: 5,
		text: "神奇播放器",
	},
];
