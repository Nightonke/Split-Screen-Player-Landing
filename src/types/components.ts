import type {
	FAQ,
	Feature,
	LanguageLink,
	Review,
	Screenshots,
	SocialLink,
	UiLabels,
} from "./content";
export interface StoreLinks {
	apple: string;
}

export interface AppHero {
	title: string;
	description: string;
	logo: string;
	storeLinks: StoreLinks;
	rating: { score: number; count: string };
	labels: UiLabels;
	ageRating: string;
	version?: string;
	minimumOS?: string;
	releaseDate?: string;
}

export interface Lightbox {
	images: Screenshots;
	labels: UiLabels;
}

export interface ScreenshotsGallery {
	images: Screenshots;
	labels: UiLabels;
}

export interface ReviewsList {
	items: Review[];
	title: string;
}

export interface FeaturesList {
	items: Feature[];
	title: string;
}

export interface FAQList {
	items: FAQ[];
	title: string;
}

export interface SocialLinksList {
	items: SocialLink[];
}

export interface FloatingNavbar {
	logo: string;
	title: string;
	homeHref: string;
	storeLinks: StoreLinks;
	socialLinks: SocialLink[];
	labels: UiLabels;
	languageLinks: LanguageLink[];
}

export interface FooterProps {
	name: string;
	logo: string;
	description: string;
	homeHref: string;
	privacyHref: string;
	termsHref: string;
	labels: UiLabels;
	languageLinks: LanguageLink[];
}

export interface LanguageSwitcherProps {
	links: LanguageLink[];
	label: string;
}
