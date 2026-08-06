import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const factsSource = fs.readFileSync(
	path.join(root, "src/config/appFacts.ts"),
	"utf8",
);

const readNumber = (name) => {
	const match = factsSource.match(new RegExp(`${name}:\\s*(\\d+(?:\\.\\d+)?)`));
	if (!match) throw new Error(`Missing ${name} in src/config/appFacts.ts`);
	return Number(match[1]);
};

const layoutCount = readNumber("layoutCount");
const maxVideos = readNumber("maxVideos");
const ratingScore = readNumber("score");
const ratingCount = readNumber("count");

const contentFiles = [
	"README.md",
	"public/manifest.json",
	"src/config/site.ts",
	"src/i18n/content.ts",
	"src/i18n/featureDetails.ts",
	"src/i18n/guides.ts",
	"src/i18n/marketing.ts",
];

const inconsistentLayouts = [];
for (const relativePath of contentFiles) {
	const source = fs.readFileSync(path.join(root, relativePath), "utf8");
	const pattern = /(\d{3})\s*(?:built-in\s+)?(?:layouts|种布局|種排版)/gi;
	for (const match of source.matchAll(pattern)) {
		if (Number(match[1]) !== layoutCount) {
			inconsistentLayouts.push(`${relativePath}: ${match[0]}`);
		}
	}
}

const manifest = JSON.parse(
	fs.readFileSync(path.join(root, "public/manifest.json"), "utf8"),
);
const readme = fs.readFileSync(path.join(root, "README.md"), "utf8");
const expectedFacts = [
	[manifest.description.includes(`${maxVideos} videos`), "manifest max videos"],
	[manifest.description.includes(`${layoutCount} layouts`), "manifest layouts"],
	[readme.includes(`${ratingScore} / ${ratingCount} ratings`), "README rating"],
	[readme.includes(`${maxVideos} videos with ${layoutCount} layouts`), "README product limits"],
];
const missingFacts = expectedFacts.filter(([matches]) => !matches).map(([, label]) => label);

if (inconsistentLayouts.length || missingFacts.length) {
	const details = [
		...inconsistentLayouts.map((item) => `Inconsistent layout count: ${item}`),
		...missingFacts.map((item) => `Missing current fact: ${item}`),
	];
	throw new Error(details.join("\n"));
}

console.log(
	`Content facts verified: ${maxVideos} videos, ${layoutCount} layouts, ${ratingScore}/${ratingCount}.`,
);
