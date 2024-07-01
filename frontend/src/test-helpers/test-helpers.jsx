import { test, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import React from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from '../i18n'

const testPropTypes = (component, validProps, invalidProps) => {
  test(`should log an error if invalid props are passed to <${component.name} />`, () => {
    const spyMock = vi.spyOn(console, 'error').mockImplementation(() => {})
    React.createElement(component, { ...invalidProps })
    expect(spyMock).toHaveBeenCalledTimes(Object.keys(invalidProps).length)
  })

  test(`should not log an error if valid props are passed to <${component.name} />`, () => {
    const spyMock = vi.spyOn(console, 'error').mockImplementation(() => {})
    React.createElement(component, { ...validProps })
    expect(spyMock).not.toHaveBeenCalled()
  })
}

const renderWithTranslation = (Component, props) => {
  render(
    <I18nextProvider i18n={i18n}>
      <Component {...props} />
    </I18nextProvider>
  )
}

export { testPropTypes, renderWithTranslation }
