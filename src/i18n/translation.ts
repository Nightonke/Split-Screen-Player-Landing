import { generatedTranslations } from "./generatedTranslations";
import type { Locale } from "./locales";
import { translationOverrides } from "./translationOverrides";

export type ExtendedLocale = Exclude<
	Locale,
	"en-US" | "zh-Hans" | "zh-Hant"
>;

const structuralStringKeys = new Set([
	"src",
	"poster",
	"videoSrc",
	"posterSrc",
	"visualSrc",
	"href",
	"url",
	"slug",
	"id",
	"number",
	"icon",
	"linkPath",
	"relatedFeature",
	"relatedUseCase",
	"kind",
]);

export const extendedLocales: ExtendedLocale[] = [
	"ja",
	"ko",
	"fr",
	"de",
	"es",
	"pt-BR",
];

const decodeGeneratedEntities = (text: string) =>
	text
		.replaceAll("&amp;", "&")
		.replaceAll("&quot;", '"')
		.replaceAll("&#39;", "'")
		.replaceAll("&lt;", "<")
		.replaceAll("&gt;", ">");

export function localizeDeep<T>(
	value: T,
	locale: ExtendedLocale,
	parentKey?: string,
): T {
	if (typeof value === "string") {
		if (parentKey && structuralStringKeys.has(parentKey)) return value;
		return decodeGeneratedEntities(
			translationOverrides[locale][value] ??
				generatedTranslations[locale][value] ??
				value,
		) as T;
	}

	if (Array.isArray(value)) {
		return value.map((item) => localizeDeep(item, locale, parentKey)) as T;
	}

	if (value && typeof value === "object") {
		return Object.fromEntries(
			Object.entries(value as Record<string, unknown>).map(([key, item]) => [
				key,
				localizeDeep(item, locale, key),
			]),
		) as T;
	}

	return value;
}
