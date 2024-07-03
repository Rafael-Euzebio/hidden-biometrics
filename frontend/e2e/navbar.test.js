import { test, expect } from '@playwright/test'
import { urls } from './constants'

test.beforeEach(async ({ page }) => {
  await page.goto(urls.base)
})

test.describe('navbar visibility', () => {
  test.describe('desktop', () => {
    test('should display navbar', async ({ page }) => {
      const navbar = page.getByRole('navigation')
      await expect(navbar).toBeVisible()
    })
  })

  test.describe('mobile', () => {
    test('should display menu button', async ({ page }) => {
      const menu = page.getByLabel('menu')
      await expect(menu).toBeVisible()
    })

    test('should only display navbar after clicking menu button', async ({ page }) => {
      const navbar = page.getByRole('navigation')
      await expect(navbar).not.toBeVisible()
      const menu = page.getByLabel('menu')
      await menu.click()
      await expect(navbar).toBeVisible()
    })
  })
})

test.describe('navbar links', () => {
  test.beforeEach(async ({ page, isMobile }) => {
    if (isMobile) {
      const menu = page.getByLabel('menu')
      await menu.click()
    }
  })

  test('should find and access Github link', async ({ page }) => {
    const githubLink = page.getByLabel('Github')
    await expect(githubLink).toBeVisible()

    await githubLink.click()
    expect(page.url()).toBe('https://github.com/Rafael-Euzebio/hidden-biometrics')
  })

  test('should find and access LinkedIn link', async ({ page }) => {
    const linkedinLink = page.getByLabel('LinkedIn')
    await expect(linkedinLink).toBeVisible()

    await linkedinLink.click()
    expect(page.url()).toBe('https://www.linkedin.com/in/rafael-euzebio/')
  })

  test('should find email link', async ({ page }) => {
    const emailLink = page.getByLabel('Email')
    await expect(emailLink).toBeVisible()
  })
})
