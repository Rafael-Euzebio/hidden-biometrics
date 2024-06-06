import React from 'react'
import { beforeEach, describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import User from './User'

const mockFingerprint = 3969806569
const mockUserInfo = {
  userAgent: {
    text: 'User Agent',
    value: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
  }
}

beforeEach(() => {
  render(<User fingerprint={mockFingerprint} userInfo={mockUserInfo} />)
})

describe('<User />', () => {
  test('should render mock user info', () => {
    const text = screen.getByText(mockUserInfo.userAgent.text)
    expect(text).toBeVisible()
    const value = screen.getByText(mockUserInfo.userAgent.value)
    expect(value).toBeInTheDocument()
  })

  test('should display mock fingerprint to the user', () => {
    const element = screen.getByText(mockFingerprint, { exact: false })
    expect(element).toBeVisible()
  })
})
