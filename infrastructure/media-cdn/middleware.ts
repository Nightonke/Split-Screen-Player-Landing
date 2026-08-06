import { geolocation, next } from "@vercel/functions";
import {
	buildTencentMediaUrl,
	shouldUseTencentCdn,
} from "./routing.mjs";

export default function middleware(request: Request) {
	const countryCode = geolocation(request).country;

	if (!shouldUseTencentCdn(countryCode)) {
		return next({
			headers: {
				"X-Media-CDN": "vercel",
			},
		});
	}

	return new Response(null, {
		status: 307,
		headers: {
			"Cache-Control": "private, max-age=3600",
			Location: buildTencentMediaUrl(request.url),
			"X-Media-CDN": "tencent-hong-kong",
		},
	});
}

export const config = {
	matcher: "/assets/v1/:path*",
};
