import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    laravel({
      input: [
        // spa
        'resources/sass/app.scss',
        'resources/js/app.js',
        // web
        'resources/js/custom.js',
        'resources/sass/style.scss',
      ],
      refresh: true,
    }),
    react(),
  ],
});