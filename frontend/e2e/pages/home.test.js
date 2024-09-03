import { test, expect } from '@playwright/test'
import { url, translations, desktopBrowsers, mobileBrowsers } from '../constants'
import i18nHelpers from '../i18n.helpers.js'

test.beforeEach(async ({ page }) => {
  await page.goto(url)
})

test.describe('Home Page', () => {
  test('should find browser fingerprint', async ({ page }) => {
    const fingerprint = await page.locator('#fingerprint').textContent()
    expect(fingerprint.trim().length).toBeGreaterThan(0)
  })

  test('should find browser information matching current browser', async ({ page, browserName, isMobile }) => {
    const browsers = isMobile ? mobileBrowsers : desktopBrowsers

    await page.getByRole('button', { name: 'Browser', exact: true }).click()
    const currentBrowser = page.getByText(browsers[browserName], { exact: true })
    await expect(currentBrowser).toBeVisible()
  })

  test.describe('i18n', () => {
    const i18nTests = (language) => {
      const translation = translations.home[language]

      test(`should display h2 in ${language}`, async ({ page }) => {
        const heading = page.getByRole('heading', { name: translation.heading })
        await expect(heading).toBeVisible()
      })

      test(`should display description in ${language}`, async ({ page }) => {
        const description = page.getByText(translation.description)
        await expect(description).toBeVisible()
      })

      test(`should display research link in ${language}`, async ({ page }) => {
        const link = page.getByText(translation.research)
        await expect(link).toBeVisible()
      })

      test(`should display box content in ${language}`, async ({ page }) => {
        const boxUpper = page.getByText(translation.boxUpper, { exact: true })
        const boxLowerVPN = page.getByText(translation.boxLowerVPN)
        const boxLowerAccessCount = page.getByText(translation.boxLowerAccessCount)
        await expect(boxUpper).toBeVisible()
        await expect(boxLowerVPN).toBeVisible()
        await expect(boxLowerAccessCount).toBeVisible()
      })
    }

    for (const language in translations.error) {
      i18nHelpers(i18nTests, language, url)
    }
  })
})

