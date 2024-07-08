import { test, expect } from '@playwright/test'
import { url } from './constants'

test.beforeEach(async ({ page }) => {
  await page.goto(url)
})

test.describe('navbar visibility', () => {
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
