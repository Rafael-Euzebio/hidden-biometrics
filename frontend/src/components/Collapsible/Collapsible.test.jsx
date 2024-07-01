import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Collapsible from './Collapsible'
import { renderWithTranslation, testPropTypes } from '@test-helpers/test-helpers'
import i18n from '../../i18n.js'

describe('<Collapsible />', () => {
  const validProps = {
    label: 'User Agent',
    content: 'content'
  }

  const invalidProps = {
    label: 1,
    content: 2
  }

  const i18nCollapsibleLabel = i18n.getDataByLanguage('en')
    .translation
    .main
    .collapsibles[validProps.label]

  beforeEach(() => {
    render(renderWithTranslation(Collapsible, validProps))
  })

  test('should display label but not content', () => {
    const label = screen.getByText(i18nCollapsibleLabel)
    const content = screen.getByText('content')
    expect(label).toBeVisible()
    expect(content).not.toBeVisible()
  })

  test('should display content when clicked', async () => {
    const user = userEvent.setup()
    const label = screen.getByText(i18nCollapsibleLabel)
    await user.click(label)
    expect(label).toHaveAttribute('aria-expanded', 'true')
    const content = screen.getByText('content')
    await waitFor(() => {
      expect(content).toBeVisible()
    })
  })

  testPropTypes(Collapsible, validProps, invalidProps)
})
