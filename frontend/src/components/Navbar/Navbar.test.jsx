import React from 'react'
import { describe, beforeEach, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Navbar from './Navbar'

describe('<Navbar />', () => {
  beforeEach(() => {
    render(<Navbar modifier="navbar--open" />)
  })

  test('should display links', () => {
    const linkLabels = ['Github', 'LinkedIn', 'Email']
    const list = screen.getByRole('list')
    expect(list).toBeVisible()

    for (const label of linkLabels) {
      const link = screen.getByLabelText(label)
      expect(link).toBeVisible()
    }
  })
})
