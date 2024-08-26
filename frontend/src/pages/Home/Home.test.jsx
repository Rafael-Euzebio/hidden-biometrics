import React from 'react'
import { describe, test, expect, beforeEach, afterEach } from 'vitest'
import { screen, render } from '@testing-library/react'
import Home from './Home'
import { renderWithTranslation } from '@test-helpers/test-helpers'
import i18n from '@src/i18n.js'

describe('<Home />', () => {
  describe('Rendering', () => {
    beforeEach(() => {
      renderWithTranslation(Home)
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


  })
})
