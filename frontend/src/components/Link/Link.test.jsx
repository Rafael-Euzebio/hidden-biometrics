import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import React from 'react'
import Link from './Link'
import { GitHub } from '@mui/icons-material'

describe('<Link />', () => {
  const link = {
    icon: <GitHub data-testid="icon"/>,
    text: 'Github',
    href: 'https://github.com'
  }

  test('should render link and icon', async () => {
    render(<Link
      icon={link.icon}
      text={link.text}
      href={link.href}
    />)

    expect(screen.getByTestId('icon')).toBeVisible()
    expect(screen.getByText('Github')).toBeVisible()
  })
})
