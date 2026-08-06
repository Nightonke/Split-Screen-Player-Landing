# Media CDN router

`assets.splitscreenplayer.com` remains the public media origin.

- Requests from mainland China (`CN`) receive a temporary redirect to the
  Tencent Cloud Hong Kong CDN.
- Requests from other regions continue to use the static files on Vercel.
- The redirect preserves the original `/assets/v1/...` path, query string,
  request method, and range request.

Before deploying, stage the current rollback copies from the repository root:

```bash
npm run sync-assets
npm test
npm run build
```

The generated `public/` directory and local `.vercel/` link are intentionally
ignored by Git.
