import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://edu-blog-example.vercel.app',
  integrations: [
    tailwind({
      applyBaseStyles: false, // We will manually load tailwind base styles in our layout to customize typography or base fonts
    }),
    sitemap()
  ],
});
