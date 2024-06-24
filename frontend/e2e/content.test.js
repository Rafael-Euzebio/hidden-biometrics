import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173')
})

test.describe('content', () => {
  test('should find browser fingerprint', async ({ page }) => {
    const fingerprint = await page.locator('#fingerprint').textContent()
    expect(fingerprint.trim().length).toBeGreaterThan(0)
  })

  test('should find browser information matching current browser', async ({ page, browserName }) => {
    const browsers = {
      chromium: 'Chrome',
      firefox: 'Firefox',
      webkit: 'Safari'
    }
    await page.getByRole('button', { name: 'Browser', exact: true }).click()

    const currentBrowser = page.getByText(browsers[browserName], { exact: true })
    await expect(currentBrowser).toBeVisible()
  })
})
