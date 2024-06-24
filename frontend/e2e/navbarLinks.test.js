import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173')
})

test.describe('navbar links', async () => {
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
