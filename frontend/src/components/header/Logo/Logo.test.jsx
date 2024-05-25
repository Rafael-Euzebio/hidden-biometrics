import React from 'react'
import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Logo from './Logo'

describe('<Logo />', () => {
  test('should render heading visibly', () => {
    render(<Logo />)
    const logoText = screen.getByText('Hidden Biometrics')
    expect(logoText).toBeVisible()
  })

  test('should render logo icon visibly', () => {
    const { container } = render(<Logo />)
    const logoIcon = container.getElementsByClassName('logo__icon')[0]
    expect(logoIcon).toBeVisible()
  })
})
