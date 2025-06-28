import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: '/tickets/', // For GitHub Pages
  integrations: [tailwind()],
});
