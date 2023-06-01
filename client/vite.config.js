import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
 // base: 'https://urbaybuy-front.up.railway.app/',
  // build: {
  //   outDir: 'dist',
  //   assetsDir: 'assets',
  //   minify: true,
  //   sourcemap: false,
  // },
});
