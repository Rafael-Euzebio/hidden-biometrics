import { test, expect } from '@playwright/test'
import { url, translations } from './constants'

const translationTests = (language) => {
  const translation = translations[language]

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
    const boxLower = page.getByText(translation.boxLower)
    await expect(boxUpper).toBeVisible()
    await expect(boxLower).toBeVisible()
  })
}

test.describe('internationalization', () => {
  for (const language in translations) {
    test.describe((`when locale is set to ${language}`), () => {
      test.beforeEach(async ({ page }) => {
        await page.goto(url)
      })

      test.use({
        locale: language
      })

      translationTests(language)
    })

    test.describe((`when querystring is ${language}`), () => {
      test.beforeEach(async ({ page }) => {
        await page.goto(`${url}?lng=${language}`)
      })

      translationTests(language)
    })

    test.describe((`when user selects ${language}`), () => {
      test.describe('desktop', () => {
        test.beforeEach(async ({ page }) => {
          await page.goto(url)
          const languageSwitcher = page.getByRole('combobox')
          await languageSwitcher.selectOption(language)
        })

        translationTests(language)
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

        translationTests(language)
      })
    })
  }

  test.describe(('fallbacks to en when subdomain or locale is not set'), () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(url)
    })

    translationTests('en')
  })
})