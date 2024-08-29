import { test, expect } from '@playwright/test'
import { url } from '../constants'

test.beforeEach(async ({ page }) => {
  await page.goto(`${url}/unkoown`)
})

test.describe('Error Page', () => {
  test('should display error message on unknown URL', async ({ page }) => {
    const errorMessage = page.getByText('Oops! An error happened!')
    const status = page.getByText('404')
    const statusMessage = page.getByText('Not Found')
    await expect(errorMessage).toBeVisible()
    await expect(status).toBeVisible()
    await expect(statusMessage).toBeVisible()
  })
})
