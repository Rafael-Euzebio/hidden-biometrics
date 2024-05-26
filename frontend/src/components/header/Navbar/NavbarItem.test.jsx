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
    const spy = vi.spyOn(console, 'error')
    render(<NavbarItem />)
    expect(spy.mock.calls.length).toBe(1)
  })

  test('should throw an error if props is not an React Element', () => {
    const spy = vi.spyOn(console, 'error')
    render(<NavbarItem component="mock text"/>)
    expect(spy.mock.calls.length).toBe(1)
  })
})
