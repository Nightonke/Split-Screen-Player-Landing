# Split Screen Player Landing

Official multilingual static landing page for Split Screen Player, an iOS app for playing, comparing, synchronizing, and exporting multiple videos on iPhone and iPad.

The site is built with Astro, React, TypeScript, and Tailwind CSS, then deployed to GitHub Pages at https://splitscreenplayer.com.

## Current App Store Baseline

- App: Split Screen Player: 36 Videos
- Version: 1.0.20
- Updated: August 3, 2026
- Rating copy: 4.9 / 166 ratings
- Google Play rating: 4.5 / 23 reviews (displayed separately from App Store ratings)
- Core message: play, compare, sync, and export up to 36 videos with 144 layouts
- New release highlight: IPTV / Xtream Codes live channel support

## Languages

Core pages cover all 39 language editions supported by NVideo. English remains at `/`; other editions use `/{locale}/`.

The single locale registry is `src/i18n/localeRegistry.json`. It includes native labels, browser-language matching, HTML/SEO language codes and reading direction. `en-US` uses generic English `hreflang="en"`; the Filipino route stays `/fil/` and uses the supported Google language annotation `tl`. Arabic, Persian, Hebrew and Urdu use RTL layouts.

Every edition includes the homepage, five feature pages, three use-case pages, a guide entry page, privacy and terms (12 core pages). The original nine editions retain 63 translated guides each. All 39 editions now include the three priority tutorials below, adding 90 guide pages across the other 30 editions. The site contains 657 guide pages and 1,125 content URLs in the sitemap; the Android redirect and 404 are separate utility pages.

- Playing multiple videos on iPhone / iPad (`play-multiple-videos-iphone-ipad`)
- Playing multiple videos on Android (`play-multiple-videos-android`)
- Watching two YouTube videos on iPhone / iPad (`watch-two-youtube-videos-iphone-ipad`)

This first tutorial batch was selected from Search Console on November 5, 2026. Together, these topics contributed 648 of 806 guide-section clicks in the available 28-day report (October 6–November 2), aggregated across language URLs. The remaining 60 tutorial topics retain their existing nine languages.

Language selection uses crawlable links and an optional suggestion; visiting a URL never automatically redirects to another language. Each translated page has its own canonical URL and reciprocal alternates only for published equivalents.

Language suggestions prioritize a saved manual choice over browser language preferences. The message, switch action and close control use the recommended language, with their own HTML language and text direction. Copy lives in `src/i18n/languageSuggestion.ts`. Dismissing a suggestion hides further suggestions for that browsing session; a page only offers translations that have been published.

The shared `src/components/LanguagePicker.astro` renders a three-column picker on desktop, two columns on phones, and one column at 360px or narrower, with native names, names in the current page language, decorative SVG flags, and a selected-language marker. Search matches native/English/current-language names and locale codes, ignoring accents. Header and footer use the same component; Escape and outside clicks close it, and static language links remain usable without JavaScript. Guide pages only list their published translations.

Picker UI labels are in `src/i18n/languagePicker.ts`; flag mappings are in the locale registry. SVGs are served locally from `public/images/flags/`, with the flag-icons MIT license included.

### Maintaining translations

- The original nine editions retain their existing content sources. Additional core editions use checked-in dictionaries in `src/i18n/coreTranslations/`; missing source strings fail the build.
- Translation generation is a manual, network-dependent authoring step. Builds and visitors never call a translation service. The initial drafts use Google translation with protected product facts; matching interface labels were aligned with NVideo. Native-language editorial review is still recommended, especially for legal copy.
- `scripts/translation-context.json` disambiguates short UI phrases such as Home, Menu, global controls and screen orientation without changing their source keys. Product names and parameters are protected as readable HTML during translation.
- Export current English copy, then generate only missing entries for selected languages:

```bash
node scripts/export-core-source.mjs /tmp/ssp-core-source.json
python3 scripts/generate-core-translations.py /tmp/ssp-core-source.json it ar
npm run build
```

Omit the language arguments to generate all additional core editions. Existing entries and manual corrections are preserved. Review generated text, Markdown headings, product terminology and parameters before release; the generator stops on service rate limits or altered protected facts.

### Publishing individual guides

`src/i18n/guideAvailability.json` controls publication independently of core language support. `"all"` retains the complete legacy guide catalog; an explicit slug array publishes only those guides. An absent locale publishes no guide detail URLs.

For a new language, add a complete `CatalogGuide` JSON document (including translated `keywords`) at `src/i18n/guideTranslations/{locale}/{slug}.json`, then add its slug to that locale's availability array. Keep the same slug as its English counterpart. Missing files fail the build. Related links must point to published pages; build checks validate them. New core-only editions offer a localized feature overview and an explicitly labeled link to the English guide library.

To author additional guide translations:

```bash
node scripts/export-guide-source.mjs /tmp/ssp-guide-source.json \
  play-multiple-videos-iphone-ipad play-multiple-videos-android watch-two-youtube-videos-iphone-ipad
python3 scripts/generate-guide-translations.py /tmp/ssp-guide-source.json it ar
```

Omit locale arguments for all 30 additional editions. The generator preserves existing pages and does not change publication availability. It translates complete articles, including metadata, FAQ, screenshot captions, alt text and keywords; filenames, slugs, platform identifiers, credits and image geometry remain intact. `scripts/guide-translation-context.json` clarifies ambiguous English phrases before translation. Each document's `_translation.sourceDigest` records the English source version; source changes fail validation so existing translations can be reviewed deliberately. Keep manual corrections when refreshing a page. Translation drafts are machine-assisted and have not had native editorial review in every language. Screenshots retain the English app interface.

Partially translated guide libraries show their available tutorials plus a labeled link to the English library. Article links to unpublished tutorials lead to the corresponding localized feature overview; related tutorial cards and language menus only include published pages.

`npm run build` verifies translation completeness, source freshness, facts and placeholders, generated guide routes, core and guide metadata, reciprocal alternates, page direction, sitemap coverage and internal links. `npm run check:localization` reruns these checks against an existing build.

## Related app recommendation

Homepages recommend ClipDock after the main feature chapters. The copy in
`src/i18n/clipDock.ts` covers all 39 site languages; links match ClipDock's nine
published languages and otherwise lead to its English homepage. The iOS local-file
and display-transform tutorials also contain contextual links to ClipDock's
transcode and resize articles, across their nine published translations. Both apps
are used separately: users save prepared files, then import them into Split Screen
Player. Recommendations are static HTML links and do not change indexing metadata.

## Tech Stack

- Astro 5
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion

## Local Development

Requirements:

- Node.js 18.17 or newer
- npm

Commands:

```bash
npm install
npm run dev
```

The development server runs at `http://localhost:4321`.

## Production

```bash
npm run build
npm run preview
```

The production build is written to `dist/`.

## Content Map

Primary localized content lives in:

- `src/i18n/content.ts`
- `src/i18n/locales.ts`

Legacy config files in `src/config/` re-export or mirror the English content for compatibility with older helper code.

Static assets live in:

- `public/assets/favicon.png`
- `public/assets/videos/app-preview-iphone.mp4`
- `public/assets/videos/app-preview-iphone-poster.jpg`
- `public/assets/chapters/`
- `public/assets/features/`
- `public/assets/use-cases/`

Large images and videos are delivered from the versioned Vercel CDN base URL
configured in `src/config/media.ts`. The copies under `public/assets/` remain
available for rollback. To build against the local copies instead, set
`PUBLIC_MEDIA_BASE_URL=/assets`.

The Vercel media project uses the geo router in
`infrastructure/media-cdn/`. Mainland China requests are redirected to the
Tencent Cloud Hong Kong CDN; requests from other regions continue to use
Vercel.

Legal page copy is generated from `src/i18n/content.ts`.

## App Store Data

The source copy is aligned with `/Users/mac/Documents/NVideoAppStore/metadata/` and current public App Store lookup data for app ID `6758291951`.

The iPhone app preview video is converted from `/Users/mac/Documents/preview.mov` for web delivery.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the Astro site and deploys `dist/` to GitHub Pages.

The custom domain is configured in `public/CNAME`.

## License

MIT. See `LICENSE`.
