import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: ['boutique-house-vintage-note-production.up.railway.app'],
  },
  server: {
    proxy: {
      '/api': 'http://127.0.0.1:8000',
      '/media': 'http://127.0.0.1:8000',
      '/static': 'http://127.0.0.1:8000',
      '/products': 'http://127.0.0.1:8000',
      '/bag': 'http://127.0.0.1:8000',
      '/checkout': 'http://127.0.0.1:8000',
      '/accounts': 'http://127.0.0.1:8000',
      '/profile': 'http://127.0.0.1:8000',
      '/admin': 'http://127.0.0.1:8000',
    },
  },
})
