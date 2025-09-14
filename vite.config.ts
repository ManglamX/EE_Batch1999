import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ensure base has a trailing slash for GitHub Pages hosting at /<repo>/
  base: process.env.VITE_BASE_PATH || '/EE_Batch1999/'
})
