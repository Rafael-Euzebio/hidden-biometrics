import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer'
import Home from './pages/Home'
import '@styles/blocks/app.scss'
import ErrorPage from './pages/ErrorPage'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage />
    }
  ])

  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App
