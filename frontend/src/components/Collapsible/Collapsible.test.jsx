import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Collapsible from './Collapsible'
import { renderWithTranslation, testPropTypes } from '@test-helpers/test-helpers'

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

  test('should display label but not content', () => {
    const label = screen.getByText('mockLabel')
    const content = screen.getByText('mockContent')
    expect(label).toBeVisible()
    expect(content).not.toBeVisible()
  })

  test('should display content when clicked', async () => {
    const user = userEvent.setup()
    const label = screen.getByText('mockLabel')
    await user.click(label)
    expect(label).toHaveAttribute('aria-expanded', 'true')
    const content = screen.getByText('mockContent')
    await waitFor(() => {
      expect(content).toBeVisible()
    })
  })

  testPropTypes(Collapsible, validProps, invalidProps)
})
