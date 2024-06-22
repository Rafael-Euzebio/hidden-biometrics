import { describe, test, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import React from 'react'
import Link from './Link'
import { GitHub } from '@mui/icons-material'
import testPropTypes from '../../test-helpers/test-helpers'

describe('<Link />', () => {
  const validProps = {
    icon: <GitHub data-testid="icon"/>,
    text: 'Github',
    label: 'github link',
    href: 'https://github.com',
    modifier: 'link--type-icon'
  }

  const invalidProps = {
    icon: 1,
    text: 1,
    label: 1,
    href: 1,
    modifier: 1
  }

  const spy = vi.spyOn(console, 'error').mockImplementation(() => {})

  test('should render link and icon', async () => {
    render(<Link
      icon={validProps.icon}
      text={validProps.text}
      label={validProps.label}
      href={validProps.href}
    />)

    expect(screen.getByTestId('icon')).toBeVisible()
    expect(screen.getByText('Github')).toBeVisible()
    expect(spy).not.toHaveBeenCalled()
  })

  test('should throw error if neither text content or label are provided', async () => {
    render(<Link
      icon={validProps.icon}
      href={validProps.href}
    />)

    expect(spy).toHaveBeenCalled()
  })

  testPropTypes(Link, validProps, invalidProps)
})
