import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // This binds to 0.0.0.0
    port: 5173   // or 4173 for preview
  },
  preview: {
    host: true,
    port: 4173
  }
})