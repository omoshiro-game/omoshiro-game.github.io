// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://omoshiro-game.github.io',
	// base: '',
	integrations: [mdx(), sitemap()],
	i18n: {
    locales: ["ja", "en"],
    defaultLocale: "ja",
	
  }
});
