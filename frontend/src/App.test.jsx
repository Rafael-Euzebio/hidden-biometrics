import { describe, test, expect, beforeEach } from 'vitest'
import { screen } from '@testing-library/react'
import App from './App'
import { renderWithTranslation } from '@test-helpers/test-helpers'
import i18n from './i18n.js'

describe('<App />', () => {
  beforeEach(() => {
    renderWithTranslation(App)
  })

  test('should display main description from english resource', () => {
    const mainDescription = i18n.getDataByLanguage('en')
      .translation
      .main
      .description

    expect(screen.getByText(mainDescription)).toBeVisible()
  })

  test('should display main heading-2 from english resource', () => {
    const mainHeading2 = i18n.getDataByLanguage('en')
      .translation
      .main['heading-2']

    expect(screen.getByText(mainHeading2)).toBeVisible()
  })
})
