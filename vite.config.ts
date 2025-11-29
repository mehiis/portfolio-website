import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],

  // your deployment folder
  base: '/~nikomeh/portfolio',

  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
