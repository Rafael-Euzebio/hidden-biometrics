import React from 'react'
import { describe, test, expect, beforeEach, afterEach, vi } from 'vitest'
import { screen, render } from '@testing-library/react'
import Home from './Home'
import { renderWithTranslation } from '@test-helpers/test-helpers'
import i18n from '@src/i18n.js'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { mockIntersectionObserver } from '@src/test-helpers/test-helpers'

describe('<Home />', () => {
  let mockObserver
  beforeEach(() => {
    mockObserver = mockIntersectionObserver()
  })

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

  describe('Requests', () => {
    const mock = new MockAdapter(axios)

    afterEach(() => {
      mock.reset()
    })

    test('should call PATCH after a successful GET', async () => {
      mock.onGet(/\/api\/users\/\d+/).reply(200)
      mock.onPost(/\/api\/users\/\d+/).reply(200)
      render(<Home />)
      await new Promise((resolve) => setTimeout(resolve, 0))

      expect(mock.history.get.length).toBeGreaterThan(0)
      expect(mock.history.patch.length).toBeGreaterThan(0)
    })

    test('should call POST after a failed GET', async () => {
      mock.onGet(/\/api\/users\/\d+/).reply(404, {
        response: {
          status: 404
        }
      })
      mock.onPost(/\/api\/users\/\d+/).reply(201)
      render(<Home />)
      await new Promise((resolve) => setTimeout(resolve, 0))
      expect(mock.history.post.length).toBeGreaterThan(0)
    })
  })
})
