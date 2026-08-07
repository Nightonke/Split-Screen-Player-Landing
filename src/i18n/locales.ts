export const defaultLocale = "en-US" as const;

export const locales = [
	"en-US",
	"zh-Hans",
	"zh-Hant",
	"ja",
	"ko",
	"fr",
	"de",
	"es",
	"pt-BR",
] as const;

export type Locale = (typeof locales)[number];

export const localeMeta: Record<
	Locale,
	{
		label: string;
		hrefLang: string;
		htmlLang: string;
		ogLocale: string;
		languagePrefixes: string[];
	}
> = {
	"en-US": {
		label: "English",
		hrefLang: "en-US",
		htmlLang: "en",
		ogLocale: "en_US",
		languagePrefixes: ["en"],
	},
	"zh-Hans": {
		label: "简体中文",
		hrefLang: "zh-Hans",
		htmlLang: "zh-Hans",
		ogLocale: "zh_CN",
		languagePrefixes: ["zh-hans", "zh-cn", "zh-sg", "zh"],
	},
	"zh-Hant": {
		label: "繁體中文",
		hrefLang: "zh-Hant",
		htmlLang: "zh-Hant",
		ogLocale: "zh_TW",
		languagePrefixes: ["zh-hant", "zh-tw", "zh-hk", "zh-mo"],
	},
	ja: {
		label: "日本語",
		hrefLang: "ja",
		htmlLang: "ja",
		ogLocale: "ja_JP",
		languagePrefixes: ["ja"],
	},
	ko: {
		label: "한국어",
		hrefLang: "ko",
		htmlLang: "ko",
		ogLocale: "ko_KR",
		languagePrefixes: ["ko"],
	},
	fr: {
		label: "Français",
		hrefLang: "fr",
		htmlLang: "fr",
		ogLocale: "fr_FR",
		languagePrefixes: ["fr"],
	},
	de: {
		label: "Deutsch",
		hrefLang: "de",
		htmlLang: "de",
		ogLocale: "de_DE",
		languagePrefixes: ["de"],
	},
	es: {
		label: "Español",
		hrefLang: "es",
		htmlLang: "es",
		ogLocale: "es_ES",
		languagePrefixes: ["es"],
	},
	"pt-BR": {
		label: "Português (Brasil)",
		hrefLang: "pt-BR",
		htmlLang: "pt-BR",
		ogLocale: "pt_BR",
		languagePrefixes: ["pt-br", "pt"],
	},
};

export const localeDetectionEntries = locales.flatMap((locale) =>
	localeMeta[locale].languagePrefixes.map((prefix) => [prefix, locale] as const),
).sort(([left], [right]) => right.length - left.length);

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
