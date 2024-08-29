import { test, expect } from '@playwright/test'
import { url, translations } from './constants'

const homeTests = (language) => {
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

const errorTests = (language) => {
  const translation = translations.error[language]

  test(`should display error message in ${language}`, async ({ page }) => {
    const errorMessage = page.getByText(translation.errorMessage)
    await expect(errorMessage).toBeVisible()
  })
}

test.describe('internationalization', () => {
  test.describe('Home', () => {
    for (const language in translations.home) {
      test.describe((`when locale is set to ${language}`), () => {
        test.beforeEach(async ({ page }) => {
          await page.goto(url)
        })

        test.use({
          locale: language
        })

        homeTests(language)
      })

      test.describe((`when querystring is ${language}`), () => {
        test.beforeEach(async ({ page }) => {
          await page.goto(`${url}?lng=${language}`)
        })

        homeTests(language)
      })

      test.describe((`when user selects ${language}`), () => {
        test.describe('desktop', () => {
          test.beforeEach(async ({ page }) => {
            await page.goto(url)
            const languageSwitcher = page.getByRole('combobox')
            await languageSwitcher.selectOption(language)
          })

          homeTests(language)
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

          homeTests(language)
        })
      })
    }

    test.describe(('fallbacks to en when subdomain or locale is not set'), () => {
      test.beforeEach(async ({ page }) => {
        await page.goto(url)
      })

      homeTests('en')
    })
  })

  test.describe('Error Page', () => {
    for (const language in translations.error) {
      test.describe((`when locale is set to ${language}`), () => {
        test.beforeEach(async ({ page }) => {
          await page.goto(`${url}/unknown`)
        })

        test.use({
          locale: language
        })

        errorTests(language)
      })

      test.describe((`when querystring is ${language}`), () => {
        test.beforeEach(async ({ page }) => {
          await page.goto(`${url}/unknown?lng=${language}`)
        })

        errorTests(language)
      })

      test.describe((`when user selects ${language}`), () => {
        test.describe('desktop', () => {
          test.beforeEach(async ({ page }) => {
            await page.goto(`${url}/unknown`)
            const languageSwitcher = page.getByRole('combobox')
            await languageSwitcher.selectOption(language)
          })

          errorTests(language)
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

          errorTests(language)
        })
      })
    }

    test.describe(('fallbacks to en when subdomain or locale is not set'), () => {
      test.beforeEach(async ({ page }) => {
        await page.goto(`${url}/unknown`)
      })

      errorTests('en')
    })
  })
})
