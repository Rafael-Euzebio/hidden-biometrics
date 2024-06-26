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
      const navbar = screen.getByRole('navigation', { hidden: true })
      expect(navbar).toBeInTheDocument()
    })
  })

  describe('interaction', () => {
    test('should open navbar on menu click', async () => {
      render(<Header />)
      const button = screen.getByRole('button')
      const user = userEvent.setup()
      const navbar = screen.getByRole('navigation', { hidden: true })
      await user.click(button)
      expect(button).toHaveAttribute('aria-expanded', 'true')
      expect(navbar).toHaveClass('navbar--open')
    })
  })
})
