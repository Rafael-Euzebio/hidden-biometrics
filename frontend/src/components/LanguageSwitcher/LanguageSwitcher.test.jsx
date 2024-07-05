import { describe, beforeEach, test, expect } from 'vitest'
import { screen } from '@testing-library/react'
import LanguageSwitcher from './LanguageSwitcher'
import { renderWithTranslation } from '@test-helpers/test-helpers'
import userEvent from '@testing-library/user-event'
import i18n from '../../i18n'

describe('<LanguageSwitcher />', () => {
  beforeEach(() => {
    renderWithTranslation(LanguageSwitcher)
  })

  test('should change resolved language to pt', async () => {
    const user = userEvent.setup()
    const selector = screen.getByRole('combobox')
    await user.selectOptions(selector, 'pt')
    expect(i18n.resolvedLanguage).toBe('pt')
  })

  test('should change resolved language to en', async () => {
    const user = userEvent.setup()
    const selector = screen.getByRole('combobox')
    await user.selectOptions(selector, 'en')
    expect(i18n.resolvedLanguage).toBe('en')
  })
})
