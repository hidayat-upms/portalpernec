import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
    plugins: [
        laravel({
            input: '/resources/js/app.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    resolve: {
        alias: [
          {
            find: "@",
            replacement: fileURLToPath(new URL("/resources/js", import.meta.url)),
          },
          // '@': fileURLToPath(new URL('./src', import.meta.url)),
          // '~': ''
          {
            find: /^~.+/,
            replacement: (val) => {
              return val.replace(/^~/, "");
            },
          },
        ],
      },
      build: {
        chunkSizeWarningLimit: 1024 * 500,
        minify: true,
        sourcemap: false,
      }
});
