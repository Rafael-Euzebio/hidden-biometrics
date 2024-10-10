import { defineConfig } from 'vite'
import { coverageConfigDefaults } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000'
      }
    }
  },
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
      exclude: [...coverageConfigDefaults.exclude, '**/main.jsx/**', '**/e2e/**', '**/playwright.config.js/**']
    },
    onConsoleLog (log, type) {
      if (log.includes('i18n')) {
        return false
      } else if (log.includes('No routes matched location')) {
        return false
      } else if (log.includes('Request failed with')){
        return false
      } else if (log.includes('ErrorResponse')){
        return false
      }
    }

  },
  resolve: {
    alias: {
      '@src': `${path.resolve(__dirname, './src/')}`,
      '@styles': `${path.resolve(__dirname, './src/styles')}`,
      '@components': `${path.resolve(__dirname, './src/components')}`,
      '@test-helpers': `${path.resolve(__dirname, './src/test-helpers')}`,
      '@utils': `${path.resolve(__dirname, './src/utils')}`
    }
  }
})
