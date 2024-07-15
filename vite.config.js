import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/myPortfolio/',  // Ensure this matches your repository name
  plugins: [react()],
});