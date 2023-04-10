import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
  },
  publicDir: 'src/public',
  server: {
    port: 7005
  },
  base: './',
  build: {
    outDir: 'src/dist'
  },
  preview: {
    port: 7000
  },
  plugins: [
    react({})
  ]
})