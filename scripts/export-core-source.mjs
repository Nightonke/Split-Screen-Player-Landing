import { createServer } from "vite";
import { writeFile } from "node:fs/promises";

const destination = process.argv[2];
if (!destination) throw new Error("Usage: node scripts/export-core-source.mjs /tmp/ssp-core-source.json");
const server = await createServer({
  configFile: false,
  resolve: { alias: { "@config": `${process.cwd()}/src/config`, "@": `${process.cwd()}/src` } },
  server: { middlewareMode: true },
  appType: "custom",
});
try {
  const load = name => server.ssrLoadModule(`/src/i18n/${name}.ts`);
  const modules = await Promise.all(["content", "marketing", "featureDetails", "chrome", "articleChrome", "guideHub", "guideNavigation", "androidPrivacySupplement", "platform"].map(load));
  const [content, marketing, features, chrome, article, hub, navigation, privacy, platform] = modules;
  const source = {
    landing: content.landingContent["en-US"],
    marketing: marketing.marketingContent["en-US"],
    features: features.featureDetails["en-US"],
    chrome: chrome.pageChrome["en-US"],
    article: article.articleChrome["en-US"],
    guideHub: hub.getGuideHub("en-US"),
    navigation: navigation.getGuideNavigation("en-US"),
    privacy: privacy.androidPrivacySupplement["en-US"],
    platformCopy: platform.platformCopy["en-US"],
    guideEntry: hub.englishGuideEntry,
  };
  await writeFile(destination, `${JSON.stringify(source, null, 2)}\n`);
  console.log(`Exported English core copy to ${destination}`);
} finally {
  await server.close();
}
