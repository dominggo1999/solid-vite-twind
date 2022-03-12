import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [eslintPlugin(), solidPlugin()],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
});
