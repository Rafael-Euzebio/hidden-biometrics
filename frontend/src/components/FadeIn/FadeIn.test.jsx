import React from 'react'
import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import FadeIn from './FadeIn'
import { mockIntersectionObserver } from '@src/test-helpers/test-helpers'

describe('<FadeIn />', () => {
  let mockObserver;
  beforeEach(() => {
    mockObserver = mockIntersectionObserver()
  })

  test('should render children', () => {
    render(
      <FadeIn>
        <p>mock text</p>
      </FadeIn>
    ) 
    const text = screen.getByText('mock text')
    expect(text).toBeInTheDocument()
    expect(mockObserver).toHaveBeenCalled()
  }) 
})
