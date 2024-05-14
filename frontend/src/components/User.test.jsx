import React from 'react'
import { beforeEach, describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import User from './User'

const mockFingerprint = 3969806569
const mockUserInfo = {
  userAgent: {
    text: 'User Agent',
    value: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
  },
  browser: {
    text: 'Browser',
    value: 'Chrome'
  },
  browserVersion: {
    text: 'Browser Version',
    value: '124.0.0.0'
  },
  os: {
    text: 'Operational System',
    value: 'Linux'
  },
  OSVersion: {
    text: 'OS Version',
    value: 'x86_64'
  },
  cpu: {
    text: 'CPU',
    value: 'amd64'
  },
  resolution: {
    text: 'Current Resolution',
    value: '1366x768'
  },
  plugins: {
    text: 'Installed Plugins',
    value: 'PDF Viewer, Chrome PDF Viewer, Chromium PDF Viewer, Microsoft Edge PDF Viewer, WebKit built-in PDF'
  },
  fonts: {
    text: 'Installed Fonts',
    value: 'Arial Black, Arial, Bauhaus 93, Calibri, Cambria, Comic Sans MS, Courier New, Georgia, Impact, KacstOne, Lohit Gujarati, Loma, Rachana, Sawasdee, Times New Roman, Trebuchet MS, Ubuntu, Umpush, Verdana, Webdings'
  }
}

beforeEach(() => {
  render(<User fingerprint={mockFingerprint} userInfo={mockUserInfo} />)
})

describe('<User />', () => {
  test('Should display mock user information to the user', () => {
    for (const key in mockUserInfo) {
      const element = screen.getByText(`${mockUserInfo[key].text}: ${mockUserInfo[key].value}`)
      expect(element).toBeVisible()
    }
  })

  test('Should display mock fingerprint to the user', () => {
    const element = screen.getByText(mockFingerprint, { exact: false })
    expect(element).toBeVisible()
  })
})
