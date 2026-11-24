// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    site: import.meta.env.PROD
        ? 'https://rahulpardhi.com' // Production URL
        : 'http://localhost:4321',

    adapter: node({
        mode: 'standalone',
    }),

    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [react(), sitemap(), icon()],
    trailingSlash: 'never',
});
