import type { Screenshots } from "@/types/content";

/**
 * App screenshots configuration
 * 
 * Showcase your app with device-specific screenshots.
 * 
 * iPhone screenshots:
 * - Recommended size: 1170x2532px (iPhone 13 Pro)
 * - Aspect ratio: 9:19.5 (portrait)
 * 
 * iPad screenshots:
 * - Recommended size: 2048x2732px (iPad Pro 12.9")
 * - Aspect ratio: 3:4 (portrait)
 * 
 * Tip: Use high-quality images, show key features
 */
export const screenshots: Screenshots = {
	iphone: [
		{ src: "/assets/screenshots/iphone/1.png", alt: "Watch Multiple Videos at Same Time on Same Screen Or Image Folder / PDF / Webpage" },
		{ src: "/assets/screenshots/iphone/2.png", alt: "Landscape or Portrait Mode, 2～36 Videos for mp4 / mov / avi / mkv / flv / f4v / wmv / m4v / rmvb / 3gp / webm" },
		{ src: "/assets/screenshots/iphone/3.png", alt: "125 Layout Options" },
		{ src: "/assets/screenshots/iphone/4.png", alt: "Customize Layouts" },
		{ src: "/assets/screenshots/iphone/5.png", alt: "Bookmark No Need to Re-select Videos or Layouts" },
		{ src: "/assets/screenshots/iphone/6.png", alt: "Control All Videos at Same Time" },
		{ src: "/assets/screenshots/iphone/7.png", alt: "Video/Image/Webpage/PDF" },
		{ src: "/assets/screenshots/iphone/8.png", alt: "Checkpoints and Video Frame Preview" },
		{ src: "/assets/screenshots/iphone/9.png", alt: "Professional Playback Capabilities" },
	],
	ipad: [
		{ src: "/assets/screenshots/ipad/1.png", alt: "iPad Watch Multiple Videos at Same Time on Same Screen Or Image Folder / PDF / Webpage" },
		{ src: "/assets/screenshots/ipad/2.png", alt: "iPad Landscape or Portrait Mode, 2～36 Videos for mp4 / mov / avi / mkv / flv / f4v / wmv / m4v / rmvb / 3gp / webm" },
		{ src: "/assets/screenshots/ipad/3.png", alt: "iPad 125 Layout Options" },
		{ src: "/assets/screenshots/ipad/4.png", alt: "iPad Customize Layouts" },
		{ src: "/assets/screenshots/ipad/5.png", alt: "iPad Bookmark No Need to Re-select Videos or Layouts" },
		{ src: "/assets/screenshots/ipad/6.png", alt: "iPad Control All Videos at Same Time" },
		{ src: "/assets/screenshots/ipad/7.png", alt: "iPad Video/Image/Webpage/PDF" },
		{ src: "/assets/screenshots/ipad/8.png", alt: "iPad Checkpoints and Video Frame Preview" },
		{ src: "/assets/screenshots/ipad/9.png", alt: "iPad Professional Playback Capabilities" },
	],
};
