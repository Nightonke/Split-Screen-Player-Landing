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
		title: "🎬 Play Multiple Videos Simultaneously",
		description: "125 layout options + custom layouts, supporting 2–36 videos at once; select videos from files or albums.",
		icon: "FiGrid",
	},
	{
		title: "📀 Supports Multiple Formats",
		description: "Support mp4, mov, avi, mkv, flv, f4v, wmv, m4v, rmvb, 3gp, webm.",
		icon: "FiFilm",
	},
	{
		title: "👍 Best Video Player",
		description: "Multiple gesture controls, video frame previews (to help you quickly find highlights), and checkpoints (to let you revisit your favorite moments).",
		icon: "FiPlay",
	},
	{
		title: "🔖 Bookmark",
		description: "No need to re-select layouts and videos every time—save bookmarks for future use.",
		icon: "FiBookmark",
	},
	{
		title: "🔗 Synchronized Control",
		description: "Activate the control lock to control one video, and the others will automatically sync—for example, pausing, playing, fast-forwarding, or rewinding simultaneously.",
		icon: "FiLock",
	},
	{
		title: "🖼️ Image Player",
		description: "Not only does it support video playback, but you can also select image folders to view photos in a slideshow.",
		icon: "FiImage",
	},
	{
		title: "🌐 Web Browsing",
		description: "Browse multiple webpages simultaneously and quickly open them from the clipboard to save time.",
		icon: "FiGlobe",
	},
	{
		title: "⬇️ Web Video Download",
		description: "Download videos in webpages. Support YouTube, Sora(OpenAI), Instagram, Twitter, TK, Threads, Facebook, Vimeo, afreecatv, Tumblr, Triller, Likee, Twitch, Pinterest, Snapchat, Reddit, VK, Dailymotion, SoundCloud, Lemon8, Suno音乐, AcFun, Bilibili, etc.",
		icon: "FiGlobe",
	},
	{
		title: "📄 PDF Viewing",
		description: "View multiple PDF files at the same time.",
		icon: "FiFileText",
	},
];
