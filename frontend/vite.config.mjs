import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    allowedHosts: ['frontend'],
    hmr: { path: 'hmr' },
  },
  plugins: [react()],
  css: {
    postcss: './postcss.config.cjs',  // Assure-toi que Vite utilise le bon fichier de config PostCSS
  },
});
