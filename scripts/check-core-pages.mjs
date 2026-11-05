import { readFile, readdir, access } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const registry = JSON.parse(await readFile("src/i18n/localeRegistry.json", "utf8"));
const availability = JSON.parse(await readFile("src/i18n/guideAvailability.json", "utf8"));
const locales = Object.keys(registry);
const site = "https://splitscreenplayer.com";
const route = (locale, page = "") => `${locale === "en-US" ? "/" : `/${locale}/`}${page ? `${page}/` : ""}`;
const directories = async name => (await readdir(path.join(dist, name), { withFileTypes: true })).filter(item => item.isDirectory()).map(item => `${name}/${item.name}`);
const corePages = ["", "privacy", "terms", "guides", ...await directories("features"), ...await directories("use-cases")];
const sitemap = (await Promise.all((await readdir(dist)).filter(name => /^sitemap.*\.xml$/.test(name)).map(name => readFile(path.join(dist, name), "utf8")))).join("\n");
const attrs = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(match => [match[1], match[2]]));
const errors = [];
const assert = (condition, message) => { if (!condition) errors.push(message); };
const cachedPages = new Map();
const readPage = async pathname => {
  if (!cachedPages.has(pathname)) cachedPages.set(pathname, readFile(path.join(dist, pathname, "index.html"), "utf8").catch(() => null));
  return cachedPages.get(pathname);
};

for (const locale of locales) {
  const meta = registry[locale];
  for (const page of corePages) {
    const pathname = route(locale, page);
    const html = await readPage(pathname);
    assert(html, `${pathname}: missing core page`);
    if (!html) continue;
    const document = attrs(html.match(/<html\s[^>]*>/)?.[0] ?? "");
    assert(document.lang === meta.htmlLang && document.dir === meta.direction, `${pathname}: incorrect language or direction`);
    assert((html.match(/<h1(?:\s|>)/g) ?? []).length === 1, `${pathname}: expected one main heading`);
    assert(/<title>[^<]+<\/title>/.test(html), `${pathname}: missing title`);
    const description = [...html.matchAll(/<meta\s[^>]+>/g)].map(match => attrs(match[0])).find(tag => tag.name === "description");
    assert(description?.content?.trim(), `${pathname}: missing description`);
    assert(!/window\.location\.replace|location\.assign/.test(html), `${pathname}: automatic language redirect`);
    assert(!/ZXQ\d|XQZ|>undefined<|>\[object Object\]</.test(html), `${pathname}: unresolved copy`);
    assert(sitemap.includes(`<loc>${site}${pathname}</loc>`), `${pathname}: missing sitemap entry`);
    const links = [...html.matchAll(/<link\s[^>]+>/g)].map(match => attrs(match[0]));
    const canonical = links.filter(link => link.rel === "canonical");
    assert(canonical.length === 1 && canonical[0].href === `${site}${pathname}`, `${pathname}: invalid canonical`);
    const alternates = links.filter(link => link.rel === "alternate" && link.hreflang);
    assert(alternates.length === locales.length + 1, `${pathname}: incorrect alternate count`);
    for (const target of locales) {
      assert(alternates.some(link => link.hreflang === registry[target].hrefLang && link.href === `${site}${route(target, page)}`), `${pathname}: missing reciprocal alternate ${target}`);
    }
    assert(alternates.some(link => link.hreflang === "x-default" && link.href === `${site}${route("en-US", page)}`), `${pathname}: invalid x-default`);
    for (const match of html.matchAll(/<a\s[^>]+>/g)) {
      const { href } = attrs(match[0]);
      if (!href?.startsWith("/") || href.startsWith("//")) continue;
      const target = new URL(href.replaceAll("&amp;", "&"), site);
      if (/\.[a-z0-9]+$/i.test(target.pathname)) {
        try { await access(path.join(dist, decodeURIComponent(target.pathname))); }
        catch { errors.push(`${pathname}: missing linked file ${href}`); }
        continue;
      }
      const targetHTML = await readPage(target.pathname);
      assert(targetHTML, `${pathname}: broken internal link ${href}`);
      if (target.hash && targetHTML) assert(targetHTML.includes(`id="${decodeURIComponent(target.hash.slice(1))}"`), `${pathname}: broken anchor ${href}`);
    }
    for (const match of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
      try { JSON.parse(match[1]); } catch { errors.push(`${pathname}: invalid JSON-LD`); }
    }
  }
  if (!Object.hasOwn(availability, locale)) {
    const guides = await directories(`${locale}/guides`);
    assert(guides.length === 0, `${locale}: untranslated guide routes were generated`);
    const landing = await readPage(route(locale));
    const english = await readPage("/");
    assert(landing?.match(/<title>(.*?)<\/title>/)?.[1] !== english?.match(/<title>(.*?)<\/title>/)?.[1], `${locale}: English fallback title`);
  }
}
if (errors.length) throw new Error(errors.join("\n"));
console.log(`Core checks passed: ${corePages.length * locales.length} pages (${corePages.length} × ${locales.length} locales), canonicals, alternates, directions and internal links.`);
