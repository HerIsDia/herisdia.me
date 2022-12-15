import { defineConfig } from 'astro/config';
import { VitePWA } from 'vite-plugin-pwa';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';

// https://astro.build/config
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: [
          'favicon.ico',
          'robots.txt',
          'apple-touch-icon.png',
          'logo.png',
          'logos/*.png',
          'backgrounds/*.png',
        ],
        manifest: {
          name: "Her is dia's website",
          short_name: 'HerIsDia.me',
          description: 'Website of HerIsDia.',
          theme_color: '#0f0f0f',
          icons: [
            {
              src: 'android-chrome-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: 'android-chrome-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
          ],
        },
        workbox: {
          sourcemap: true,
        },
      }),
    ],
  },
  integrations: [tailwind(), svelte(), mdx()],
});
