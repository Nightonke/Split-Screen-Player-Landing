import { createServer } from "vite";
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

export async function loadEnglishGuides() {
  const server = await createServer({
    configFile: false,
    resolve: { alias: { "@config": `${process.cwd()}/src/config`, "@": `${process.cwd()}/src` } },
    server: { middlewareMode: true },
    appType: "custom",
  });
  try {
    const { getGuides } = await server.ssrLoadModule("/src/i18n/guideCatalog.ts");
    return Object.fromEntries(getGuides("en-US").map(guide => [guide.slug, guide]));
  } finally {
    await server.close();
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const [destination, ...slugs] = process.argv.slice(2);
  if (!destination || !slugs.length) throw new Error("Usage: node scripts/export-guide-source.mjs OUTPUT.json SLUG [SLUG ...]");
  const guides = await loadEnglishGuides();
  for (const slug of slugs) if (!guides[slug]) throw new Error(`Unknown guide: ${slug}`);
  await writeFile(destination, `${JSON.stringify(Object.fromEntries(slugs.map(slug => [slug, guides[slug]])), null, 2)}\n`);
  console.log(`Exported ${slugs.length} English guides to ${destination}`);
}
