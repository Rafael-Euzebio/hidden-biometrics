import { test, expect } from '@playwright/test'

const i18nHelpers = (pageTests, language, url) => {
  test.describe((`when locale is set to ${language}`), () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(url)
    })

    test.use({
      locale: language
    })

    pageTests(language)
  })

  test.describe((`when querystring is ${language}`), () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(`${url}?lng=${language}`)
    })

    pageTests(language)
  })

  test.describe((`when user selects ${language}`), () => {
    test.describe('desktop', () => {
      test.beforeEach(async ({ page }) => {
        await page.goto(url)
        const languageSwitcher = page.getByRole('combobox')
        await languageSwitcher.selectOption(language)
      })

      pageTests(language)
    })

    test.describe('mobile', () => {
      test.beforeEach(async ({ page }) => {
        await page.goto(url)
        const menu = page.getByLabel('menu button')
        await menu.click()
        const languageSwitcher = page.getByRole('combobox')
        await expect(languageSwitcher).toBeVisible()
        await languageSwitcher.selectOption(language)
      })

      pageTests(language)
    })
  })

  if (language === 'en') {
    test.describe(('fallbacks to en when subdomain or locale is not set'), () => {
      test.beforeEach(async ({ page }) => {
        await page.goto(url)
      })

      pageTests(language)
    })
  }
}

export default i18nHelpers
