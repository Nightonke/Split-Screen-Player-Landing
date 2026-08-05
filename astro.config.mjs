import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://splitscreenplayer.com",
  integrations: [tailwind(), sitemap()],
  output: "static", // optional
});
