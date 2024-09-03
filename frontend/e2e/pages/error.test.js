import { test, expect } from '@playwright/test'
import { url, translations } from '../constants'
import i18nHelpers from '../i18n.helpers.js'

test.beforeEach(async ({ page }) => {
  await page.goto(`${url}/unkoown`)
})

test.describe('Error Page', () => {
  test('should display error message on unknown URL', async ({ page }) => {
    const errorMessage = page.getByText('Oops! An error happened!')
    const status = page.getByText('404')
    const statusMessage = page.getByText('Not Found')
    await expect(errorMessage).toBeVisible()
    await expect(status).toBeVisible()
    await expect(statusMessage).toBeVisible()
  })

  test.describe('Internationalization', () => {
    const errorTests = (language) => {
      const translation = translations.error[language]

      test(`should display error message in ${language}`, async ({ page }) => {
        const errorMessage = page.getByText(translation.errorMessage)
        await expect(errorMessage).toBeVisible()
      })
    }

    for (const language in translations.error) {
      i18nHelpers(errorTests, language, `${url}/unknown`)
    }
  })
})
