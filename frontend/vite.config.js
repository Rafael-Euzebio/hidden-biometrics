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
    coverage: {
      provider: 'istanbul', // or 'v8'
      exclude: [...coverageConfigDefaults.exclude, '**/main.jsx/**', '**/App.jsx/**']
    }
  },
  resolve: {
    alias: {
      '@styles': `${path.resolve(__dirname, './src/styles')}`,
      '@components': `${path.resolve(__dirname, './src/components')}`
    }
  }
})
