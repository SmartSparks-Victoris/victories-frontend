/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    include: ['**/*.test.tsx', '**/tests/**/*.test.tsx'],
    setupFiles: './vitest.setup.ts',
    environment: 'jsdom',
    globals: true,
    css: true,
  },
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
  },
});

