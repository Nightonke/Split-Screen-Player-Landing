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
		question: "Is Coloray Free to Use?",
		answer: "Yes, you can use Coloray's basic features. You can also choose to become a premium member for access to over 18 advanced features. Premium membership automatically renews, with a 7-day free trial available for cancellation anytime.",
	},
	{
		question: "Who is Coloray Suitable for?",
		answer: "Coloray is ideal for anyone who wants to see what important things they did each day throughout the year. It not only helps you record significant events but also clearly displays how your annual activities are distributed across each day. It also assists in analyzing, recalling, and searching these precious memories.",
	},
	{
		question: "Is Data Secure on Coloray?",
		answer: "Yes, your Coloray data is stored locally on your phone and comes with built-in encryption protection. We make every effort to ensure the security of your data.",
	},
	// Add more questions here...
];
