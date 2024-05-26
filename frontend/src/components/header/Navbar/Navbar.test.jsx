import React from 'react'
import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Navbar from './Navbar'

describe('<Navbar />', () => {
  test('should render links', () => {
    const { container } = render(<Navbar />)
    const list = screen.getByRole('list')
    expect(list).toBeVisible()
    const items = container.getElementsByClassName('navbar__item')

    for (const item of items) {
      expect(item).toBeVisible()
      expect(item.getElementsByClassName('link')[0]).toBeVisible()
    }
  })
})
