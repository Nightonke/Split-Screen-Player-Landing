# Configuration

Most current landing-page content now lives in `src/i18n/`:

| File | Purpose |
|------|---------|
| `src/i18n/content.ts` | Localized page copy, SEO metadata, features, FAQ, reviews, legal text, screenshots |
| `src/i18n/locales.ts` | Locale list, language labels, and localized URL helpers |

This folder remains for compatibility with older helper code:

| File | Purpose |
|------|---------|
| `site.ts` | English fallback app metadata and App Store link |
| `features.ts` | Re-exports English feature cards |
| `screenshots.ts` | Re-exports English screenshot paths |
| `reviews.ts` | Re-exports English review excerpts |
| `faqs.ts` | Re-exports English FAQ copy |
| `socialLinks.ts` | Social profile links |

## Updating Content

For user-visible copy, update `src/i18n/content.ts` first. Keep `site.ts` aligned when changing app-level fallback fields such as version, rating, or App Store URL.

## Screenshots

Screenshot assets are stored under `public/assets/screenshots/`.

- English iPhone: `public/assets/screenshots/iphone/`
- English iPad: `public/assets/screenshots/ipad/`
- Simplified Chinese: `public/assets/screenshots/zh-Hans/`
- Traditional Chinese: `public/assets/screenshots/zh-Hant/`

The current website screenshots are resized from `/Users/mac/Documents/NVideoAppStore/screenshots/` for faster loading.
