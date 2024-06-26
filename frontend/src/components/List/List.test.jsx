import React from 'react'
import { describe, test, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import List from './List'
import testPropTypes from '../../test-helpers/test-helpers'

describe('<List />', () => {
  const validProps = {
    items: ['item-1', 'item-2', 'item-3', 'item-4', 'item-5', 'item-6', 'item-7', 'item-8', 'item-9'],
    modifier: 'list--horizontal'
  }
  const invalidProps = {
    items: 1,
    modifier: 1
  }

  test('should display a list with every item from the array passed as props', () => {
    render(<List items={validProps.items} modifier={validProps.modifier}/>)
    for (const item of validProps.items) {
      expect(screen.getByText(item)).toBeVisible()
    }
  })

  test('should return empty div if invalid items are passed as props', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {})
    render(<List items={invalidProps.items} />)
    expect(screen.getByTestId('no-items')).toBeVisible()
    expect(spy).toHaveBeenCalled()
  })

  testPropTypes(List, validProps, invalidProps)
})
