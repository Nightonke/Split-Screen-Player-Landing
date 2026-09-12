# Multi-video tutorial pilot

Date: 2026-09-12. One existing tutorial, English and Simplified Chinese editions.

- Route: `/guides/play-multiple-videos-iphone-ipad/` and `/zh-Hans/guides/play-multiple-videos-iphone-ipad/`.
- Content: `src/i18n/illustratedMultiVideoGuide.ts`; applied after other locales are generated to isolate this pilot.
- Assets: `public/images/guides/multi-video/{en,zh-Hans}/`; five real screenshots per language, WebP, about 1.76 MB total across both editions.
- The hero is a portrait three-video result. Steps show portrait layout filtering, the localized Open menu, landscape layout filtering, and the four-video result with the toolbar on the right.
- Menus and button names were checked against SSP 1.0.29 `Localizable.strings` and the running iPhone interface. The Chinese Open screenshot shows the replacement menu of a populated region; the copy explains both empty and populated regions.
- VIP membership is required for the illustrated layouts. The Debug capture override is not presented as consumer entitlement.

## Capture source

App branch `dev/Dev_1.0.29_Simulator`, commit `83149cea`. Xcode 26.0.1; iPhone 17 Pro Max / iOS 26.0, using the simulator's existing Photos videos. The two scenes were saved as app snapshots and restored successfully. The capture app is Chinese after the final session.

Raw PNG files, orange-frame PNG masters, the normalized landscape copies, and capture metadata are stored locally at:

`/Users/viktorhuang/Downloads/SSP-Tutorial-Pilot-2026-09-12/`

The orange shell was composed with the existing `NVideo/Tools/AppStoreScreenshotFramer/add_iphone_frame.py`. Landscape captures and the shell were rotated 90° counterclockwise first, preserving original raw PNGs. WebP compression changes the file format only; the app content was not fabricated.

## Validation and preview

- Debug simulator build succeeded; three- and four-video playback, layout switching, and snapshot restoration checked in the app.
- `npm run build`: content consistency check and 172-page Astro build passed.
- English and Chinese responsive views checked at 390 px and/or 1280 px; no horizontal overflow. Chinese page checked at both widths. No browser console errors observed.
- Five assets per pilot locale: file presence, dimensions, localized paths, and HowTo step anchors checked in generated HTML. The seven other locales retain their existing tutorial media.
- Android and iPad screenshots are outside this pilot. External display and RTSP runtime behavior were not tested.

```sh
npm ci
npm run dev -- --host 127.0.0.1 --port 4327
```

This work is for local review and has not been published.
