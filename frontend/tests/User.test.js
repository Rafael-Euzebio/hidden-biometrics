import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173')
})

test('should find browser fingerprint', async ({ page }) => {
  await page.goto('http://localhost:5173')
  const fingerprint = await page.locator('.user__fingerprint').innerHTML()
  expect(fingerprint).toBeDefined()
  expect(fingerprint).not.toBeNull()
})

test('should redirect to websites corresponding to the icons on navbar', async ({ page }) => {
  const links = [
    'https://github.com/Rafael-Euzebio/hidden-biometrics',
    'https://www.linkedin.com/in/rafael-euzebio/'
  ]
  await page.goto('http://localhost:5173')

  for (const link of links) {
    await page.locator(`a[href="${link}"]`).click()
    expect(page.url()).toBe(link)
    await page.goto('http://localhost:5173')
  }
})
