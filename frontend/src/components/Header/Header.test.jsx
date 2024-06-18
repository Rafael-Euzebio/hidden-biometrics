import React from 'react'
import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from './Header'

describe('<Header />', () => {
  describe('renders children', () => {
    beforeEach(() => {
      render(<Header />)
    })

    test('should render logo', async () => {
      const logo = screen.getByRole('heading')
      expect(logo).toBeVisible()
    })

    test('should render menu button', () => {
      const button = screen.getByRole('button')
      expect(button).toBeInTheDocument()
    })

    test('should render navbar', () => {
      const navbar = screen.getByRole('navigation')
      expect(navbar).toBeInTheDocument()
    })
  })

  describe('interaction', () => {
    test('should render menu button', async () => {
      const { container } = render(<Header />)
      const button = screen.getByRole('button')
      const user = userEvent.setup()
      await user.click(button)
      const openNavbar = container.getElementsByClassName('navbar--open')[0]
      expect(openNavbar).toBeInTheDocument()
    })
  })
})
