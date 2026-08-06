import { cp, mkdir, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const sourceDirectory = fileURLToPath(
	new URL("../../../public/assets/", import.meta.url),
);
const targetDirectory = fileURLToPath(
	new URL("../public/assets/v1/", import.meta.url),
);

await rm(targetDirectory, { force: true, recursive: true });
await mkdir(targetDirectory, { recursive: true });
await cp(sourceDirectory, targetDirectory, { recursive: true });

console.log(`Synced media assets to ${targetDirectory}`);
