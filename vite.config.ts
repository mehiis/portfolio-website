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
  base: '/~nikomeh/portfolio',

resolve: {
    alias: {
      // Tämä yhdistää nykyisen kansion (__dirname) ja 'src'-kansion oikein
      '@': path.resolve(__dirname, './src'),
    },
  },
});
