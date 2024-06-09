import { test, expect, vi } from 'vitest'
import React from 'react'

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

export default testPropTypes
