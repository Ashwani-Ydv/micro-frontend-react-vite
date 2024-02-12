// micro-frontend/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  server: {
    port: 5174,
  },
  plugins: [
    react(),
    federation({
      name: 'micro_frontend',
      filename: 'remoteEntry.js',
      exposes: {
        './MicroApp': './src/App.jsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
});
