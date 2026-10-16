import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// `base` is the folder the site is served from.
// Locally (npm run dev) it is '/'.
// On GitHub Pages the deploy workflow sets BASE_PATH to '/<repo-name>/'
// (or '/' if the repo is named <username>.github.io).
export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_PATH || '/',
});