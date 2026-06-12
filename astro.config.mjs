// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export const SITE_URL = 'https://lilan.io';

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
});
