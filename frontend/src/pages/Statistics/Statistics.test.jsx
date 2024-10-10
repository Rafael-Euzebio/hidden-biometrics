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
      },
      deviceType: {
        Mobile: 5,
        Desktop: 2,
      }
    }

    beforeEach(() => {
      mock.onGet('/api/statistics').reply(200, { payload })
      renderWithTranslation(Statistics)
    })

    describe('Screen readers', () => {
      test("should render browser's statistics", async () => {
        for (const browser in payload.browsers) {
          const data = await screen.findByText(`${browser}: users: ${payload.browsers[browser]}`)
          expect(data).toBeInTheDocument()
        }
      })

      test("should render os statistics", async () => {
        for (const name in payload.os) {
          const data = await screen.findByText(`${name}: users: ${payload.os[name]}`)
          expect(data).toBeInTheDocument()
        }
      })
      
      test("should render device type statistics", async () => {
        for (const device in payload.deviceType) {
          const data = await screen.findByText(`${device}: users: ${payload.deviceType[device]}`)
          expect(data).toBeInTheDocument()
        }
      })
    })

    test('should display charts', async () => {
      const browsersChart = await screen.findByTestId('chart-Browsers')
      const osChart = await screen.findByTestId('chart-Operational Systems')
      const deviceCharts = await screen.findByTestId('chart-Device Type')
      expect(osChart).toBeVisible()
      expect(browsersChart).toBeVisible()
    })
  })
})
