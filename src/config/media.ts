const DEFAULT_MEDIA_BASE_URL =
	"https://assets.splitscreenplayer.com/assets/v1";

const configuredMediaBaseURL =
	import.meta.env.PUBLIC_MEDIA_BASE_URL?.trim() || DEFAULT_MEDIA_BASE_URL;

export const MEDIA_BASE_URL = configuredMediaBaseURL.replace(/\/+$/, "");

export const mediaAsset = (path: string) => {
	const normalizedPath = path.replace(/^\/+/, "").replace(/^assets\//, "");
	return `${MEDIA_BASE_URL}/${normalizedPath}`;
};
