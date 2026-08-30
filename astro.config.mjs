// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://kauelima.com',

  integrations: [mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },

  // Self-hosted, subset and preloaded via Astro's built-in Fonts API — no
  // third-party CDN request, no layout shift.
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Archivo',
      cssVariable: '--font-archivo',
      weights: [600, 700, 800, 900],
      styles: ['normal'],
      subsets: ['latin'],
      display: 'swap',
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: [400, 500, 600],
      styles: ['normal'],
      subsets: ['latin'],
      display: 'swap',
    },
  ],
});
