import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import React from 'react'
import Link from './Link'
import { GitHub } from '@mui/icons-material'
import testPropTypes from '../../test-helpers/test-helpers'

describe('<Link />', () => {
  const validProps = {
    icon: <GitHub data-testid="icon"/>,
    text: 'Github',
    href: 'https://github.com',
    modifier: 'link--type-icon'
  }

  const invalidProps = {
    icon: 1,
    text: 1,
    href: 1,
    modifier: 1
  }

  test('should render link and icon', async () => {
    render(<Link
      icon={validProps.icon}
      text={validProps.text}
      href={validProps.href}
    />)

    expect(screen.getByTestId('icon')).toBeVisible()
    expect(screen.getByText('Github')).toBeVisible()
  })

  testPropTypes(Link, validProps, invalidProps)
})
