import React from 'react'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import User from './User'
import { testPropTypes } from '@test-helpers/test-helpers'
import { mockIntersectionObserver } from '@src/test-helpers/test-helpers'

describe('<User />', () => {
  let mockObserver;
  beforeEach(() => {
    mockObserver = mockIntersectionObserver()
  })
  const validProps = {
    user: {
      fingerprint: 3969806569,
      accessCount: 2
    },
    deviceInfo: {
      userAgent: {
        text: 'User Agent',
        value: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
      }
    }
  }

  const invalidProps = {
    user: 1,
    deviceInfo: 1
  }

  describe('valid props', () => {
    beforeEach(() => {
      render(<User user={validProps.user} deviceInfo={validProps.deviceInfo}/>)
    })

    test('should render mock user info', () => {
      const text = screen.getByText(validProps.deviceInfo.userAgent.text)
      const value = screen.getByText(validProps.deviceInfo.userAgent.value)
      expect(text).toBeInTheDocument()
      expect(value).toBeInTheDocument()
      expect(mockObserver).toHaveBeenCalled()
    })

    test('should display mock fingerprint to the user', { timeout: 5000 }, async () => {
      await new Promise((resolve) => { setTimeout(() => {resolve()}, 3000)})
      const element = screen.getByText(validProps.user.fingerprint, { exact: false})
      expect(element).toBeVisible()
    })
  })

  describe('Access Count', () => {
    test('should display correct text for singular access count', () => {
      const singularAccessCount = {
        user: {
          fingerprint: 3969806569,
          accessCount: 1
        },
        deviceInfo: {
          userAgent: {
            text: 'User Agent',
            value: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
          }
        }
      }
      render(<User user={singularAccessCount.user} deviceInfo={singularAccessCount.deviceInfo}/>)
      const text = screen.getByText('You have viewed this page once.')
      expect(text).toBeVisible()
    })

    test('should display correct text for plural access count', () => {
      render(<User user={validProps.user} deviceInfo={validProps.deviceInfo}/>)
      const text = screen.getByText(`You have viewed this page ${validProps.user.accessCount} times.`)
      expect(text).toBeVisible()
    })
  })

  describe('invalid props', () => {
    const undefinedUserAgent = {
      user: {
        fingerprint: 3969806569,
        accessCount: 1
      },
      deviceInfo: {
        userAgent: {
          text: 'User Agent',
          value: undefined
        }
      }
    }
    test('should return empty div if user info has an undefined value', async () => {
      render(<User user={undefinedUserAgent} deviceInfo={undefinedUserAgent.deviceInfo}/>)
      const emptyDiv = screen.getByTestId('empty-div')
      expect(emptyDiv).toBeInTheDocument()
      expect(emptyDiv).not.toHaveTextContent()
      expect(mockObserver).toHaveBeenCalled()
    })
  })

  testPropTypes(User, validProps, invalidProps)
})
