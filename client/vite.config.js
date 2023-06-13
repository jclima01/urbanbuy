import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      'redux-persist/integration/react': 'redux-persist/es/integration/react',
    },
  },
});
