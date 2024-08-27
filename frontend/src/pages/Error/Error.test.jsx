import React from 'react'
import { describe, test, expect } from 'vitest'
import { screen } from '@testing-library/react'
import Error from './Error'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { renderWithTranslation } from '@src/test-helpers/test-helpers'

describe('<Error />', () => {
  test('should display error message', () => {
    const router = createBrowserRouter([
      {
        path: '/',
        element: <div></div>,
        errorElement: <Error />
      }
    ])

    renderWithTranslation(RouterProvider, { router })

    const error = screen.getByText('Oops! An error happened!')
    const status = screen.getByText('404')
    const statusMessage = screen.getByText('Not Found')

    expect(error).toBeVisible()
    expect(status).toBeVisible()
    expect(statusMessage).toBeVisible()
  })
})
