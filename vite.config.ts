import { defineConfig } from 'vite'

export default defineConfig({
  // Relative asset paths keep the build portable for GitHub Pages and other static hosts.
  base: './',
  server: {
    port: 5173,
  },
})
