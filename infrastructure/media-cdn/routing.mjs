export const TENCENT_CDN_ORIGIN =
	"https://assets-cn-test.splitscreenplayer.com";

export const shouldUseTencentCdn = (countryCode) =>
	countryCode?.trim().toUpperCase() === "CN";

export const buildTencentMediaUrl = (requestUrl) => {
	const sourceUrl = new URL(requestUrl);
	const destinationUrl = new URL(sourceUrl.pathname, TENCENT_CDN_ORIGIN);
	destinationUrl.search = sourceUrl.search;
	return destinationUrl.href;
};
