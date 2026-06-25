import type { LanguageLink, StoreData, UiLabels } from "./content";

export interface LayoutProps {
	title: string;
	description?: string;
	lang?: string;
	keywords?: string[];
	alternates?: LanguageLink[];
}

export interface LayoutWithAppDataProps extends LayoutProps {
	appData?: Partial<StoreData> & {
		name: string;
		shortName?: string;
		logo: string;
		description: string;
		storeLinks: { apple: string };
	};
	homeHref?: string;
	privacyHref?: string;
	termsHref?: string;
	labels?: UiLabels;
}

export interface MarkdownContentProps {
	breadcrumbLabel: string;
	content: string;
	homeHref?: string;
	languageLinks?: LanguageLink[];
	languageLabel?: string;
}
