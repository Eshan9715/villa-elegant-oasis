import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    Sitemap({
      // Define your website's base URL
      hostname: 'https://villa-elegant-oasis.netlify.app/',
      // List all routes in your React app
    }),
  ],
})
