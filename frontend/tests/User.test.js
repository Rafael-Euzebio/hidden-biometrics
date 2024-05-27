import { test, expect } from '@playwright/test'

test('should find browser fingerprint', async ({ page }) => {
  await page.goto('http://localhost:5173')
  const fingerprint = await page.locator('.user__fingerprint').innerHTML()
  expect(fingerprint).toBeDefined()
  expect(fingerprint).not.toBeNull()
})
