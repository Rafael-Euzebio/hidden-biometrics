import { test, expect } from '@playwright/test'
import { url, translations, desktopBrowsers, mobileBrowsers } from '../constants'
import i18nHelpers from '../i18n.helpers.js'

test.beforeEach(async ({ page }) => {
  await page.goto(`${url}/statistics`)
})

test.describe('Statistics Page', () => {
  test.describe('i18n', () => {
    const data = { payload: {
        browsers: {
          Firefox: 3,
          Chrome: 4
        },
        os: {
          Android: 2,
          Windows: 5
        },
        deviceType : {
          Mobile: 2,
          Desktopk: 5,
        }
    }}
    test.beforeEach(async ({ page }) => {
      await page.route('*/**/api/statistics', async (route) => {
        const json = {}
      await route.fulfill({ data });
      })
    })

    const i18nTests = (language) => {
      test('should find browser data for screen readers', async ({ page }) => {
        for (const browser in data.payload.browsers) {
          const browserData = page.getByText(`${browser}: ${translations.statistics[language].label}: ${data.payload.browsers[browser]}`)
          expect(browserData).toBeDefined()
        }
      })
    }

    for (const language in translations.statistics) {
      i18nHelpers(i18nTests, language, `${url}/statistics`)
    }
  })
})

