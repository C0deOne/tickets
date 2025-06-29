import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

console.log('NODE_ENV during config:', process.env.NODE_ENV);
console.log('Base path will be:', process.env.NODE_ENV === 'production' ? '/tickets/' : '/');

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/tickets/' : '/',
  integrations: [tailwind()],
});