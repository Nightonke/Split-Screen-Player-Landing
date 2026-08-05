# Configuration

Most current landing-page content now lives in `src/i18n/`:

| File | Purpose |
|------|---------|
| `src/i18n/content.ts` | Localized page copy, SEO metadata, features, FAQ, reviews, and legal text |
| `src/i18n/locales.ts` | Locale list, language labels, and localized URL helpers |

This folder remains for compatibility with older helper code:

| File | Purpose |
|------|---------|
| `site.ts` | English fallback app metadata and App Store link |
| `features.ts` | Re-exports English feature cards |
| `reviews.ts` | Re-exports English review excerpts |
| `faqs.ts` | Re-exports English FAQ copy |
| `socialLinks.ts` | Social profile links |

## Updating Content

For user-visible copy, update `src/i18n/content.ts` first. Keep `site.ts` aligned when changing app-level fallback fields such as version, rating, or App Store URL.

## App Preview Video

The website video preview lives in `public/assets/videos/`.

- Video: `public/assets/videos/app-preview-iphone.mp4`
- Poster: `public/assets/videos/app-preview-iphone-poster.jpg`

The current MP4 and poster are converted from `/Users/mac/Documents/preview.mov`.
