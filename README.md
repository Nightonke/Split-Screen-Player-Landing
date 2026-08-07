# Split Screen Player Landing

Official multilingual static landing page for Split Screen Player, an iOS app for playing, comparing, synchronizing, and exporting multiple videos on iPhone and iPad.

The site is built with Astro, React, TypeScript, and Tailwind CSS, then deployed to GitHub Pages at https://splitscreenplayer.com.

## Current App Store Baseline

- App: Split Screen Player: 36 Videos
- Version: 1.0.20
- Updated: August 3, 2026
- Rating copy: 4.8 / 63 ratings
- Core message: play, compare, sync, and export up to 36 videos with 144 layouts
- New release highlight: IPTV / Xtream Codes live channel support

## Languages

The site currently publishes:

- `/` for English
- `/zh-Hans/` for Simplified Chinese
- `/zh-Hant/` for Traditional Chinese
- `/ja/` for Japanese
- `/ko/` for Korean
- `/fr/` for French
- `/de/` for German
- `/es/` for Spanish
- `/pt-BR/` for Brazilian Portuguese

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
