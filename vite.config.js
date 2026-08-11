import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  },
  server: {
    fs: { strict: false },
    proxy: {
      '/samsara-api': {
        target: 'https://api.samsara.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/samsara-api/, '')
      }
    }
  },
  optimizeDeps: { disabled: true }
});
