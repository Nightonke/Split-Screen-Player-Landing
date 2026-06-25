export interface Feature {
	title: string;
	description: string;
	icon: string;
}

export interface FAQ {
	question: string;
	answer: string;
}

export interface Review {
	author: string;
	rating: number;
	text: string;
	avatar?: string;
}

export interface SocialLink {
	url: string;
	icon: string;
	label: string;
}

export interface ScreenshotItem {
	src: string;
	alt?: string;
}

export interface Screenshots {
	iphone: ScreenshotItem[];
	ipad: ScreenshotItem[];
}

export interface AppPreviewVideo {
	videoSrc: string;
	posterSrc: string;
	ariaLabel: string;
}

export interface UiLabels {
	features: string;
	faq: string;
	screenshots: string;
	userReviews: string;
	downloadOn: string;
	appStore: string;
	ratings: string;
	version: string;
	requires: string;
	updated: string;
	iphone: string;
	ipad: string;
	privacy: string;
	terms: string;
	allRightsReserved: string;
	languageLabel: string;
	closeLightbox: string;
	previousImage: string;
	nextImage: string;
	goToImage: string;
}

export interface StoreData {
	name: string;
	shortName?: string;
	description: string;
	logo: string;
	rating: {
		score: number;
		count: string;
	};
	ageRating: string;
	version?: string;
	minimumOS?: string;
	releaseDate?: string;
	screenshots: Screenshots;
	appPreview: AppPreviewVideo;
	storeLinks: {
		apple: string;
	};
}

export interface LanguageLink {
	locale: string;
	label: string;
	href: string;
	hrefLang: string;
	isActive: boolean;
}

export interface TocItem {
	id: string;
	text: string;
	level: number;
}

export interface TableOfContentsProps {
	content: string;
}

export const areImagesEqual = <T extends { images: Screenshots }>(
	prev: T,
	next: T,
) => prev.images === next.images;
