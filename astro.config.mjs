import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import { appFacts } from "./src/config/appFacts.ts";

export default defineConfig({
  site: "https://splitscreenplayer.com",
  // Keep the URL encoded in the Android QR code short. Astro emits a static
  // redirect page so this also works on GitHub Pages.
  redirects: {
    "/android": appFacts.googlePlayUrl,
  },
  integrations: [react(), tailwind(), sitemap()],
  output: "static", // optional
  vite: {
    build: {
      cssTarget: "safari15",
    },
  },
});
