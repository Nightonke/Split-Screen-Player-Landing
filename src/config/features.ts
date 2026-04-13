import type { Feature } from "@/types/content";

/**
 * App features configuration
 *
 * Add or remove features to showcase your app's capabilities.
 * Each feature should have:
 * - title: Short, catchy name (2-4 words)
 * - description: Brief explanation (1-2 sentences)
 * - icon: Icon name from react-icons/fi (FiStar, FiZap, FiBox, etc.)
 *
 * Available icons: https://react-icons.github.io/react-icons/
 */
export const features: Feature[] = [
	{
		title: "Intuitive & Clear",
		description: "The main page features 12 columns representing 12 months, neatly displaying all 365 days. Each day fills with color as you record your activities.",
		icon: "FiEye",
	},
	{
		title: "Edit",
		description: "Pull down on the side margins to edit today, swipe up to edit yesterday. Choose tag colors, text entries, photos, and mark important days. Coloray automatically populates steps, weather, and location.",
		icon: "FiEdit2",
	},
	{
		title: "View",
		description: "Tap a date to quickly preview daily details. Release to access additional actions.",
		icon: "FiMousePointer",
	},
	{
		title: "Settings",
		description: "↑↑. Two fingers swipe up to access settings where you can customize skins and daily palette styles.",
		icon: "FiSettings",
	},
	{
		title: "Statistics",
		description: "→←. Pinch to view statistics. Analyze tag distribution and trend changes across time periods.",
		icon: "FiBarChart",
	},
	{
		title: "Memories",
		description: "←→. Pinch out to memories. Your days transform into a starry sky, automatically playing and randomly recalling your cherished moments.",
		icon: "FiClock",
	},
	{
		title: "Photo Wall",
		description: "↙↗. Shake your phone. Each day becomes a photo from your records. From the Photo Wall, you can continue to Memories and Share.",
		icon: "FiSmartphone",
	},
	{
		title: "Share",
		description: "Long-press on both blank sides with two fingers to share. You can share cards in various styles with family, friends, or yourself.",
		icon: "FiShare2",
	},
	{
		title: "Filter",
		description: "Long-press on either blank side with one finger to filter. You can quickly view the distribution percentage of a specific tag within the current year.",
		icon: "FiFilter",
	},
	{
		title: "Search",
		description: "↓↓. Two fingers swipe down to search. You can find all recorded days and conveniently analyze trends for numerical changes like weight or savings.",
		icon: "FiSearch",
	},
	{
		title: "Switch Years",
		description: "←←/→→. Swipe left or right with two fingers to switch years.",
		icon: "FiCalendar",
	},
	// Add more features here...
];
