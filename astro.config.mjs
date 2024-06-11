import { defineConfig } from 'astro/config';
import AstroPWA from '@vite-pwa/astro';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';

// https://astro.build/config
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    svelte(),
    mdx(),
    AstroPWA({
      sourcemap: true,
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.ico',
        'robots.txt',
        'apple-touch-icon.png',
        'logo.png',
        'logos/*',
        'backgrounds/*',
        'assets/*'
      ],
      manifest: {
        mode: 'development',
        base: '/',
        scope: '/',
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
        globPatterns: ['**/*'],
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
  output: 'server',
  adapter: node({
      mode: "standalone"
    })
});
