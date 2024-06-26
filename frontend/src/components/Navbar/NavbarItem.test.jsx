import React from 'react'
import { describe, test, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import NavbarItem from './NavbarItem'
import testPropTypes from '../../test-helpers/test-helpers'

describe('<NavbarItem />', () => {
  const MockComponent = () => <p>mock component</p>

  const validProps = {
    component: <MockComponent />
  }
  const invalidProps = {
    component: 1
  }

  test('should display component passed as props', () => {
    render(<NavbarItem component={validProps.component} />)
    const renderedComponent = screen.getByText('mock component')
    expect(renderedComponent).toBeVisible()
  })

  testPropTypes(NavbarItem, validProps, invalidProps)
})
