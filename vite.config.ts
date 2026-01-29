import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';

export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],

  // your deployment folder
  base: process.env.CI ? '/' : '/~nikomeh/portfolio/',

resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
