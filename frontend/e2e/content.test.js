import { test, expect } from '@playwright/test'
import { url, desktopBrowsers, mobileBrowsers } from './constants'

test.beforeEach(async ({ page }) => {
  await page.goto(url)
})

test.describe('content', () => {
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
})
