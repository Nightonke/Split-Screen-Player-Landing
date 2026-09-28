import { readFile, readdir, access } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const locales = ["en-US", "zh-Hans", "zh-Hant", "ja", "ko", "fr", "de", "es", "pt-BR"];
const dist = path.join(root, "dist");
const sitemap = (await Promise.all((await readdir(dist)).filter(name => /^sitemap.*\.xml$/.test(name)).map(name => readFile(path.join(dist, name), "utf8")))).join("\n");
const directory = locale => path.join(dist, locale === "en-US" ? "" : locale, "guides");
const sourceSlugs = (await readdir(directory("en-US"), { withFileTypes: true })).filter(item => item.isDirectory()).map(item => item.name).sort();
const errors = [];
const metadata = new Map();
const attrs = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(match => [match[1], match[2]]));
const assert = (condition, message) => { if (!condition) errors.push(message); };
let checked = 0;

for (const locale of locales) {
  const slugs = (await readdir(directory(locale), { withFileTypes: true })).filter(item => item.isDirectory()).map(item => item.name).sort();
  assert(JSON.stringify(slugs) === JSON.stringify(sourceSlugs), `${locale}: guide routes differ from English`);
  for (const slug of slugs) {
    const pagePath = `${locale === "en-US" ? "" : `/${locale}`}/guides/${slug}/`;
    const html = await readFile(path.join(directory(locale), slug, "index.html"), "utf8");
    assert(sitemap.includes(`<loc>https://splitscreenplayer.com${pagePath}</loc>`), `${pagePath}: missing sitemap entry`);
    const links = [...html.matchAll(/<link\s[^>]+>/g)].map(match => attrs(match[0]));
    const canonical = links.filter(link => link.rel === "canonical");
    assert(canonical.length === 1 && canonical[0].href === `https://splitscreenplayer.com${pagePath}`, `${pagePath}: invalid canonical`);
    const alternates = links.filter(link => link.rel === "alternate" && link.hreflang);
    for (const language of [...locales, "x-default"]) {
      const prefix = language === "en-US" || language === "x-default" ? "" : `/${language}`;
      assert(alternates.some(link => link.hreflang === language && link.href === `https://splitscreenplayer.com${prefix}/guides/${slug}/`), `${pagePath}: missing alternate ${language}`);
    }
    const jsonLD = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].flatMap(match => {
      try { const value = JSON.parse(match[1]); return Array.isArray(value) ? value : [value]; }
      catch { errors.push(`${pagePath}: invalid JSON-LD`); return []; }
    });
    const howTo = jsonLD.find(item => item["@type"] === "HowTo");
    assert(howTo?.step?.length > 0, `${pagePath}: missing HowTo steps`);
    for (const [index, step] of (howTo?.step ?? []).entries()) {
      assert(step.name?.trim() && step.text?.trim(), `${pagePath}: empty step ${index + 1}`);
      assert(html.includes(`id="step-${index + 1}"`), `${pagePath}: missing step anchor ${index + 1}`);
      assert(!/\$?\{[A-Za-z]\w*\}/.test(`${step.name} ${step.text}`), `${pagePath}: unresolved copy token`);
    }
    if (html.includes("ssp-guide-article")) {
      assert(jsonLD.some(item => item["@type"] === "Article"), `${pagePath}: missing Article`);
      assert(jsonLD.some(item => item["@type"] === "FAQPage" && item.mainEntity.length > 0), `${pagePath}: missing FAQPage`);
    }
    for (const match of html.matchAll(/<img\s[^>]+>/g)) {
      const image = attrs(match[0]);
      if (!image.src?.startsWith("/images/guides/")) continue;
      assert(!/\/zh-(?:Hans|Hant)\//.test(image.src), `${pagePath}: localized screenshot instead of English capture`);
      assert(Boolean(image.alt?.trim()), `${pagePath}: screenshot has no alt text`);
      const file = path.join(root, "public", image.src);
      if (!metadata.has(file)) metadata.set(file, sharp(file).metadata().catch(() => null));
      const dimensions = await metadata.get(file);
      assert(dimensions, `${pagePath}: missing or unreadable screenshot ${image.src}`);
      if (dimensions) assert(Number(image.width) === dimensions.width && Number(image.height) === dimensions.height, `${pagePath}: wrong image dimensions ${image.src}`);
    }
    for (const match of html.matchAll(/<a\s[^>]+>/g)) {
      const { href } = attrs(match[0]);
      if (!href?.startsWith("/") || href.startsWith("//")) continue;
      const target = new URL(href, "https://splitscreenplayer.com");
      if (!/^\/(?:zh-Hans\/|zh-Hant\/|ja\/|ko\/|fr\/|de\/|es\/|pt-BR\/)?guides\//.test(target.pathname)) continue;
      const file = path.join(dist, decodeURIComponent(target.pathname), "index.html");
      try {
        await access(file);
        if (target.hash) assert((await readFile(file, "utf8")).includes(`id="${target.hash.slice(1)}"`), `${pagePath}: broken anchor ${href}`);
      } catch { errors.push(`${pagePath}: broken guide link ${href}`); }
    }
    checked++;
  }
}
if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`Guide checks passed: ${checked} pages, ${sourceSlugs.length} guides × ${locales.length} languages, ${metadata.size} screenshot assets.`);
