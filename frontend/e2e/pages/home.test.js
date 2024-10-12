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
    // disable animation
    page.addStyleTag({ content: '.fade-in { opacity: 1; visibility: visible }'})

    const browsers = isMobile ? mobileBrowsers : desktopBrowsers
    let collapsible = page.getByRole('button', { name: 'Browser', exact: true })
    await collapsible.click()
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
    }

    for (const language in translations.error) {
      i18nHelpers(i18nTests, language, url)
    }
  })
})

