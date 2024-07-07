import React from 'react'
import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('<Footer />', () => {
  beforeEach(() => {
    render(<Footer />)
  })

  describe('Tech Stack', () => {
    test('should display link to React website', () => {
      const link = screen.getByText('React')
      expect(link).toBeVisible()
    })

    test('should display link to Vite website', () => {
      const link = screen.getByText('Vite')
      expect(link).toBeVisible()
    })

    test('should display link to ClientJS website', () => {
      const link = screen.getByText('ClientJS')
      expect(link).toBeVisible()
    })
  })

  describe('Socials', () => {
    test('should display link to LinkedIn', () => {
      const link = screen.getByText('LinkedIn')
      expect(link).toBeVisible()
    })

    test('should display link to Github', () => {
      const link = screen.getByText('Github')
      expect(link).toBeVisible()
    })

    test('should display link to Email', () => {
      const link = screen.getByText('Email')
      expect(link).toBeVisible()
    })
  })
})
