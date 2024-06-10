import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import React from 'react'
import Collapsible from './Collapsible'
import testPropTypes from '../../test-helpers/test-helpers'

describe('<Collapsible />', () => {
  const validProps = {
    label: 'mockLabel',
    content: 'mockContent'
  }

  const invalidProps = {
    label: 1,
    content: 2
  }

  beforeEach(() => {
    render(<Collapsible
      label={ validProps.label }
      content={ validProps.content }
    />)
  })

  test('should render label', () => {
    expect(screen.getByText('mockLabel')).toBeVisible()
  })

  test('should render content when clicked', () => {
    const element = screen.getByText('mockLabel')
    element.click()
    expect(screen.getByText('mockContent')).toBeVisible()
  })

  testPropTypes(Collapsible, validProps, invalidProps)
})
