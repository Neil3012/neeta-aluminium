import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // GitHub Pages hosts this project below /neeta-aluminium/.
  base: '/neeta-aluminium/',
  plugins: [react()],
});
