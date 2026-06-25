# Split Screen Player Landing

Official static landing page for Split Screen Player, an iOS app for watching multiple videos, images, web pages, and PDFs side by side on iPhone and iPad.

The site is built with Astro, React, TypeScript, and Tailwind CSS, then deployed to GitHub Pages at https://splitscreenplayer.com.

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

Most website content lives in `src/config/`:

| File | Purpose |
|------|---------|
| `site.ts` | App name, description, App Store link, rating, version, SEO keywords |
| `features.ts` | Feature cards shown on the homepage |
| `screenshots.ts` | iPhone and iPad screenshot lists |
| `reviews.ts` | App Store review excerpts |
| `faqs.ts` | FAQ copy |
| `socialLinks.ts` | Social profile links |

Legal page copy lives in:

- `src/pages/content/privacy.md`
- `src/pages/content/terms.md`

Static assets live in:

- `public/assets/favicon.png`
- `public/assets/screenshots/iphone/`
- `public/assets/screenshots/ipad/`

## App Store Data

The site can optionally fetch App Store metadata at build time through `src/utils/fetchStoreData.ts`.

By default, `fetchRealData` is disabled in `src/config/site.ts`, so the site uses manually maintained copy and screenshots.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the Astro site and deploys `dist/` to GitHub Pages.

The custom domain is configured in `public/CNAME`.

## License

MIT. See `LICENSE`.
