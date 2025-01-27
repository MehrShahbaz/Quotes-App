import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.js'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/**'],
      exclude: ['src/reportWebVitals.ts', 'src/routes', 'src/react-app-env.d.ts'],
    },
  },
  resolve: {
    alias: {
      components: resolve(__dirname, 'src/components'),
      helper: resolve(__dirname, 'src/helper'),
      mocks: resolve(__dirname, 'src/mocks'),
      reducer: resolve(__dirname, 'src/reducer'),
      routes: resolve(__dirname, 'src/routes'),
      screens: resolve(__dirname, 'src/screens'),
      services: resolve(__dirname, 'src/services'),
      types: resolve(__dirname, 'src/types'),
    },
  },
});
