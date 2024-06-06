import React from 'react'
import { describe, test, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import NavbarItem from './NavbarItem'

describe('<NavbarItem />', () => {
  test('should render component passed as props', () => {
    const TestComponent = () => <p>mock component</p>

    render(<NavbarItem component={<TestComponent/>} />)
    const renderedComponent = screen.getByText('mock component')
    expect(renderedComponent).toBeVisible()
  })

  test('should throw an error if props is not provided', () => {
    const spyMock = vi.spyOn(console, 'error').mockImplementation(() => {})
    render(<NavbarItem />)
    expect(spyMock).toHaveBeenCalled()
  })

  test('should throw an error if props is not an React Element', () => {
    const spyMock = vi.spyOn(console, 'error').mockImplementation(() => {})
    render(<NavbarItem component="mock text"/>)
    expect(spyMock).toHaveBeenCalled()
  })
})
