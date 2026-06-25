import type { FAQ } from "@/types/content";

/**
 * Frequently Asked Questions configuration
 * 
 * Answer common user questions before they ask.
 * Each FAQ should have:
 * - question: Clear, specific question
 * - answer: Concise, helpful answer (1-3 sentences)
 * 
 * Tip: Address pricing, features, compatibility, support
 */
export const faqs: FAQ[] = [
	{
		question: "How many videos can I play at once?",
		answer: "Split Screen Player supports layouts for 2 to 36 videos. Actual playback performance depends on your device, video resolution, format, and file size.",
	},
	{
		question: "Which media types are supported?",
		answer: "You can play common video formats, view image folders as slideshows, open multiple web pages, and display PDF files side by side.",
	},
	{
		question: "Can playback be synchronized?",
		answer: "Yes. When control lock is enabled, playback actions such as play, pause, fast-forward, rewind, and seeking can be applied across videos together.",
	},
	{
		question: "Does it work offline?",
		answer: "Local videos, images, and PDFs can be used offline after they are available on your device. Web browsing and web video downloads require a network connection.",
	},
];
