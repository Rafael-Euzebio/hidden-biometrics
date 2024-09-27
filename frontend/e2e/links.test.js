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

  test.describe('Navbar', () => {
    test.beforeEach(async ({ page, isMobile }) => {
      if (isMobile) {
        const menu = page.getByLabel('menu')
        await menu.click()
      }
    })

    test.describe('Contact links', () => {
      for (const link of links.contact) {
        verifyAndAccessLink('text', link.label, link.href)
      }
    })

    test.describe('Page links', () => {
      for (const link of links.pages) {
        test(`should find an access ${link.text} link`, async ({ page }) => {
          const foundLink = page.getByText(link.text)
          await expect(foundLink).toBeVisible()
          await foundLink.click() 
          expect(page.url()).toBe(url + link.href)
        })
      }
    })
  })

  test.describe('footer', () => {
    const footerLinks = [...links.contact, ...links.techstack]
    for (const link of footerLinks) {
      verifyAndAccessLink('text', link.text, link.href)
    }
  })
})
