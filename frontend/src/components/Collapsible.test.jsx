import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import React from 'react'
import Collapsible from './Collapsible'

describe('<Collapsible />', () => {
  test('should render label', () => {
    render(<Collapsible
      label="mockLabel"
      content="mockContent"
    />)

    expect(screen.getByText('mockLabel')).toBeVisible()
  })

  test('should render content when clicked', () => {
    render(<Collapsible
      label="mockLabel"
      content="mockContent"
    />)

    const element = screen.getByText('mockLabel')
    element.click()
    expect(screen.getByText('mockContent')).toBeVisible()
  })
})
