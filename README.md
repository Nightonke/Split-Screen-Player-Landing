# Split Screen Player Landing

Official multilingual static landing page for Split Screen Player, an iOS app for playing, comparing, synchronizing, and exporting multiple videos on iPhone and iPad.

The site is built with Astro, React, TypeScript, and Tailwind CSS, then deployed to GitHub Pages at https://splitscreenplayer.com.

## Current App Store Baseline

- App: Split Screen Player: 36 Videos
- Version: 1.0.20
- Updated: June 25, 2026
- Rating copy: 4.5 / 15 ratings
- Core message: play, compare, sync, and export up to 36 videos with 134 layouts
- New release highlight: IPTV / Xtream Codes live channel support

## Languages

The site currently publishes:

- `/` for English
- `/zh-Hans/` for Simplified Chinese
- `/zh-Hant/` for Traditional Chinese

Each localized page has language switcher links, localized legal pages, localized SEO metadata, and `hreflang` alternates.

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
- `public/assets/screenshots/iphone/`
- `public/assets/screenshots/ipad/`
- `public/assets/screenshots/zh-Hans/`
- `public/assets/screenshots/zh-Hant/`

Legal page copy is generated from `src/i18n/content.ts`.

## App Store Data

The source copy is aligned with `/Users/mac/Documents/NVideoAppStore/metadata/` and current public App Store lookup data for app ID `6758291951`.

Screenshot assets are resized from `/Users/mac/Documents/NVideoAppStore/screenshots/` for web delivery.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the Astro site and deploys `dist/` to GitHub Pages.

The custom domain is configured in `public/CNAME`.

## License

MIT. See `LICENSE`.
