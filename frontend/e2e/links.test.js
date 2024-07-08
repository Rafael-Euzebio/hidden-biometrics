import { test, expect } from '@playwright/test'
import { url } from './constants'
import links from '../src/utils/links'

const verifyAndAccessLink = async (locator, linkText, expectedUrl) => {
  test(`should find and access ${linkText} link`, async ({ page }) => {
    const link = locator === 'label' ? page.getByLabel(linkText) : page.getByText(linkText)

    await expect(link).toBeVisible()

    if (linkText !== 'Email') {
      await link.click()
      expect(page.url()).toBe(expectedUrl)
    }
  })
}

test.beforeEach(async ({ page }) => {
  await page.goto(url)
})

test.describe('links', () => {
  test.describe('navbar', () => {
    test.beforeEach(async ({ page, isMobile }) => {
      if (isMobile) {
        const menu = page.getByLabel('menu')
        await menu.click()
      }
    })
    for (const link of links.contact) {
      verifyAndAccessLink('label', link.label, link.href)
    }
  })

  test.describe('footer', () => {
    for (const linkGroup in links) {
      for (const link of links[linkGroup]) {
        verifyAndAccessLink('text', link.label, link.href)
      }
    }
  })
})
