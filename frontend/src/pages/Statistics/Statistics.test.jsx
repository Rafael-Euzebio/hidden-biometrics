import React from 'react'
import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import Statistics from './Statistics'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { renderWithTranslation } from '@src/test-helpers/test-helpers'

describe('<Statistics />', () => {

  const mock = new MockAdapter(axios)

  test('should make a GET request upon rendering', () => {
    mock.onGet('/api/statistics').reply(200)
    renderWithTranslation(Statistics)
    expect(mock.history.get.length).toBeGreaterThan(0)
  })

  describe('data', () => {
    const payload = {
      browsers: {
        Firefox: 3,
        Chrome: 4
      },
      os: {
        Linux: 4,
        Windows: 3
      }
    }

    beforeEach(() => {
      mock.onGet('/api/statistics').reply(200, { payload })
      renderWithTranslation(Statistics)
    })

    test('should render data for screen readers', async () => {
      for (const browser in payload.browsers) {
        screen.debug()
        const data = await screen.findByText(`${browser}: users: ${payload.browsers[browser]}`)
        expect(data).toBeInTheDocument()
      }
    })

    test('should display charts', async () => {
      const browsersChart = await screen.findByTestId('chart-Browsers')
      const osChart = await screen.findByTestId('chart-Operational Systems')
      expect(osChart).toBeVisible()
      expect(browsersChart).toBeVisible()
    })
  })
})
