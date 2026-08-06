import assert from "node:assert/strict";
import test from "node:test";
import {
	buildTencentMediaUrl,
	shouldUseTencentCdn,
} from "../routing.mjs";

test("routes only mainland China country codes to Tencent CDN", () => {
	assert.equal(shouldUseTencentCdn("CN"), true);
	assert.equal(shouldUseTencentCdn(" cn "), true);
	assert.equal(shouldUseTencentCdn("HK"), false);
	assert.equal(shouldUseTencentCdn("TW"), false);
	assert.equal(shouldUseTencentCdn("US"), false);
	assert.equal(shouldUseTencentCdn(undefined), false);
});

test("preserves the media path and query string on redirect", () => {
	assert.equal(
		buildTencentMediaUrl(
			"https://assets.splitscreenplayer.com/assets/v1/videos/demo.mp4?download=1",
		),
		"https://assets-cn-test.splitscreenplayer.com/assets/v1/videos/demo.mp4?download=1",
	);
});
