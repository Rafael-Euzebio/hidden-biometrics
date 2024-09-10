import React from 'react'
import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Statistics from './Statistics'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

describe('<Statistics />', () => {
  const mock = new MockAdapter(axios)
  test('should make a GET request upon rendering', () => {
    mock.onGet('/api/statistics').reply(200)
    render(<Statistics />)
    expect(mock.history.get.length).toBeGreaterThan(0)
  })
})
