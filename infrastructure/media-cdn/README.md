# Media deployment

The website remains on GitHub Pages. `assets.splitscreenplayer.com` serves the
`split-screen-player-assets` R2 bucket through Cloudflare's CDN. Cloudflare DNS
keeps the apex and existing Tencent hostnames in DNS-only mode.

Requests for `/assets/v1/` from mainland China (`ip.src.country eq "CN"`) receive
a 307 redirect to `https://assets-cn-test.splitscreenplayer.com`, preserving the
path and query string. A response-header rule sets `Access-Control-Allow-Origin:
*` on the public asset host, including redirects. R2 and the Tencent CDN must
also return this header so video Range requests can follow cross-origin redirects.
The separate `media.splitscreenplayer.com` Android tutorial service is unchanged.

## Publish assets

Run from the repository root with Node.js 22 or newer:

```bash
npm run media:prepare
npm run media:publish:r2 -- --dry-run
npm run media:publish:r2
```

The publisher uploads only the generated `infrastructure/media-cdn/public/`
asset tree, sets MIME types and a one-day cache lifetime, and downloads every
object to verify SHA-256. It uses an existing Wrangler OAuth login stored in
the OS credential store, or an explicitly provided `CLOUDFLARE_API_TOKEN`.
No credentials are stored in this repository. `--verify-only` checks existing
objects without uploading.

Upload the same `assets/v1/` tree to Tencent COS bucket
`splitscreenplayer-1257446936` in Hong Kong. Refresh changed URLs on the Tencent
CDN and Cloudflare when replacing existing paths. Verify hashes, image loading,
video MIME types, CORS and 206 Range responses on both public domains before
publishing the website with `npm run build` and pushing to `main`.

Historical Vercel assets are backed up offline and are not uploaded to R2.
The old Vercel middleware and configuration in this directory are retained for
rollback; they are not the active routing configuration. To build a standalone
website with local assets, set `PUBLIC_MEDIA_BASE_URL=/assets`.

Generated assets, `.vercel/` and `.deploy/` verification receipts are ignored
by Git. The migration used 22 current objects; the 2026-11-10 optimized copy and
the original Vercel export have verified backups on the external drive.
