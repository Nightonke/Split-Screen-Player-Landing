export const defaultLocale = "en-US" as const;

export const locales = ["en-US", "zh-Hans", "zh-Hant"] as const;

export type Locale = (typeof locales)[number];

export const localeMeta: Record<
	Locale,
	{ label: string; hrefLang: string; htmlLang: string }
> = {
	"en-US": {
		label: "English",
		hrefLang: "en-US",
		htmlLang: "en",
	},
	"zh-Hans": {
		label: "简体中文",
		hrefLang: "zh-Hans",
		htmlLang: "zh-Hans",
	},
	"zh-Hant": {
		label: "繁體中文",
		hrefLang: "zh-Hant",
		htmlLang: "zh-Hant",
	},
};

export const localizedPath = (locale: Locale, page = "") => {
	const cleanPage = page.replace(/^\/|\/$/g, "");
	const suffix = cleanPage ? `${cleanPage}/` : "";
	return locale === defaultLocale ? `/${suffix}` : `/${locale}/${suffix}`;
};

export const getLanguageLinks = (activeLocale: Locale, page = "") =>
	locales.map((locale) => ({
		locale,
		label: localeMeta[locale].label,
		href: localizedPath(locale, page),
		hrefLang: localeMeta[locale].hrefLang,
		isActive: locale === activeLocale,
	}));
