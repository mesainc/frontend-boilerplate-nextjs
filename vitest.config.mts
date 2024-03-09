/// <reference types="vitest" />

import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { loadEnv } from 'vite'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['**/*.test.tsx', '**/*.spec.tsx', '**/*.spec.ts'],
    setupFiles: ['./test/setup.ts'],
    env: loadEnv('', process.cwd(), ''),
    coverage: {
      provider: 'istanbul',
      exclude: ['src/common/components/Icons/*', '**/schema/*'],
    },
  },
})