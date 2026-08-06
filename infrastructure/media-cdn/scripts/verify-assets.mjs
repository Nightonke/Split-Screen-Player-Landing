import { access, readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const assetDirectory = fileURLToPath(
	new URL("../public/assets/v1/", import.meta.url),
);

await access(assetDirectory);
const entries = await readdir(assetDirectory, { recursive: true });
const mediaFiles = entries.filter((entry) => /\.(?:jpe?g|mp4|png)$/i.test(entry));

if (mediaFiles.length === 0) {
	throw new Error(`No media files found in ${assetDirectory}`);
}

console.log(`Verified ${mediaFiles.length} media assets`);
