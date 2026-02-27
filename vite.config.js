// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // map `@` to the src directory
      '@': path.resolve(__dirname, 'src'),
    },
  },
  // ...other options...
});