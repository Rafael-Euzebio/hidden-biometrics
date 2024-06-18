import { defineConfig } from 'vite'
import { coverageConfigDefaults } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './testSetup.js',
    browser: {
      enabled: true,
      name: 'chrome', // browser name is required
      headless: true
    },
    exclude: ['**/node_modules/**',
      '**/dist/**',
      '**/cypress/**',
      '**/.{idea,git,cache,output,temp}/**',
      '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
      '**/e2e/**'],
    coverage: {
      provider: 'istanbul', // or 'v8'
      exclude: [...coverageConfigDefaults.exclude, '**/main.jsx/**', '**/App.jsx/**', '**/e2e/**', '**/playwright.config.js/**']
    }
  },
  resolve: {
    alias: {
      '@styles': `${path.resolve(__dirname, './src/styles')}`,
      '@components': `${path.resolve(__dirname, './src/components')}`
    }
  }
})
