import { defineConfig } from "astro/config";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import image from '@astrojs/image';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://basicblog.lanceross.xyz",
  markdown: {
    shikiConfig: {
      theme: "slack-dark",
      wrap: true,
    },
  },
  base: "/",
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
  integrations: [
    compress({
      css: true,
      html: true,
      js: true,
      img: true,
      svg: true,
      webp: true,
    }),
    tailwind(),
    sitemap(),
    mdx(),
    image(),
  ],
});
