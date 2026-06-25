# Configuration

This folder contains the editable content for the Split Screen Player landing page.

## Files

| File | Purpose |
|------|---------|
| `site.ts` | App name, description, App Store link, rating, version, SEO keywords |
| `features.ts` | Homepage feature cards |
| `screenshots.ts` | iPhone and iPad screenshot paths |
| `reviews.ts` | App Store review excerpts |
| `faqs.ts` | Frequently asked questions |
| `socialLinks.ts` | Social profile links |

## Updating The App Store Link

Edit `site.ts`:

```ts
export const storeDataConfig = {
  fetchRealData: false,
  appStoreAppId: 6758291951,
};

export const siteConfig = {
  storeLinks: {
    apple: "https://apps.apple.com/app/id6758291951",
  },
};
```

Set `fetchRealData` to `true` only when the build should fetch live metadata from Apple's lookup API. When it is `false`, the site uses the manual values in `siteConfig`.

## Screenshots

Screenshot assets are stored under `public/assets/screenshots/`.

- iPhone: `public/assets/screenshots/iphone/`
- iPad: `public/assets/screenshots/ipad/`

After replacing an image file, update `screenshots.ts` if the filename or alt text changed.

## Reviews And FAQ

- Use `reviews.ts` for short review excerpts.
- Use `faqs.ts` for product questions that belong on the landing page.
- Keep copy specific to Split Screen Player and avoid generic starter copy.
