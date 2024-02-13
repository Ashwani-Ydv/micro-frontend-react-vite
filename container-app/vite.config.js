// container-app/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'container_app',
      remotes: {
        micro_frontend: 'https://micro-frontend-react-vite.vercel.app/',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
});
