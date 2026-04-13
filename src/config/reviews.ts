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
		author: "Lily S.",
		rating: 5,
		text: "Coloray has made recording my daily life so joyful! The colorful interface is so eye-pleasing, and the daily check-in and mood recording features are exactly what I need for a lovely life journal.",
	},
	{
		author: "Noah K.",
		rating: 5,
		text: "I've been using this app for a month now and it's become my go-to app for tracking my days. The operation is super intuitive, and the colorful theme customization makes every record feel special.",
	},
	{
		author: "Sophia L.",
		rating: 5,
		text: "Finally an app that blends daily tracking with a beautiful, colorful design! Coloray is lightweight but has all the features I need for journaling and planning—10/10 recommend!",
	},
	{
		author: "Ethan M.",
		rating: 4,
		text: "Great app for daily recording with a really unique colorful interface. The core functions work perfectly, and I just hope there's a desktop sync feature added in the future to make it even better.",
	},
	{
		author: "Olivia P.",
		rating: 5,
		text: "The mood and daily activity tracking in Coloray is game-changing for me! It’s so easy to log my days with just a few taps, and the colorful visualizations make it fun to look back on my memories.",
	},
	{
		author: "Lucas T.",
		rating: 5,
		text: "I love how this app turns plain daily recording into a colorful experience. No complicated setup, just simple and beautiful journaling—this app has quickly become a part of my daily routine!",
	},
];
