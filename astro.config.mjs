import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://splitscreenplayer.com",
  integrations: [react(), tailwind(), sitemap()],
  output: "static", // optional
});
