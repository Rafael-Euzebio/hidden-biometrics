import React from 'react'
import { describe, test, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import List from './List'

describe('<List />', () => {
  test('should render every item from the array passed as props', () => {
    const listItems = ['item-1', 'item-2', 'item-3', 'item-4', 'item-5', 'item-6', 'item-7', 'item-8', 'item-9']

    render(<List items={listItems} />)
    for (const item of listItems) {
      expect(screen.getByText(item)).toBeVisible()
    }
  })

  test('should throw an error if props is not provided', () => {
    const spyMock = vi.spyOn(console, 'error').mockImplementation(() => {})
    render(<List />)
    expect(spyMock).toHaveBeenCalled()
  })

  test('should throw an error if items is not an array', () => {
    const spyMock = vi.spyOn(console, 'error').mockImplementation(() => {})
    render(<List items="mock"/>)
    expect(spyMock).toHaveBeenCalled()
  })

  test('should throw an error if modifier is not a string', () => {
    const spyMock = vi.spyOn(console, 'error').mockImplementation(() => {})
    render(<List items={ ['1', '2', '3'] } modifier={ 1 }/>)
    expect(spyMock).toHaveBeenCalled()
  })
})
