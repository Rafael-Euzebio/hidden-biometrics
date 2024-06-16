import React from 'react'
import { beforeEach, describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import User from './User'
import testPropTypes from '../../test-helpers/test-helpers'

describe('<User />', () => {
  const validProps = {
    fingerprint: 3969806569,
    userInfo: {
      userAgent: {
        text: 'User Agent',
        value: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
      }
    }
  }
  const invalidProps = {
    fingerprint: '3969806569',
    userInfo: 1
  }

  describe('valid props', () => {
    beforeEach(() => {
      render(<User fingerprint={validProps.fingerprint} userInfo={validProps.userInfo} />)
    })

    test('should render mock user info', () => {
      const text = screen.getByText(validProps.userInfo.userAgent.text)
      expect(text).toBeVisible()
      const value = screen.getByText(validProps.userInfo.userAgent.value)
      expect(value).toBeInTheDocument()
    })

    test('should display mock fingerprint to the user', () => {
      const element = screen.getByText(validProps.fingerprint, { exact: false })
      expect(element).toBeVisible()
    })
  })

  describe('invalid props', () => {
    const undefinedUserAgent = {
      fingerprint: 3969806569,
      userInfo: {
        userAgent: {
          text: 'User Agent',
          value: undefined
        }
      }
    }
    test('should return empty div if user info has an undefined value', async () => {
      render(<User fingerprint={undefinedUserAgent.fingerprint} userInfo={undefinedUserAgent.userInfo} />)
      const emptyDiv = screen.getByTestId('empty-div')
      expect(emptyDiv).toBeVisible()
      expect(emptyDiv).not.toHaveTextContent()
    })
  })

  testPropTypes(User, validProps, invalidProps)
})
