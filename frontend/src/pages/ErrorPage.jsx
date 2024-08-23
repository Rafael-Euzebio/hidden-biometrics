import React from 'react'
import '@styles/blocks/box.scss'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  console.log(error)
  return (
    <main className="main main--centered">
      <div className="box">
        <p className="box__content">Oops! An error happened!</p>
        <p className="box__content--large">{error.status}</p>
        <p className="box__content">{error.statusText}</p>
      </div>
    </main>
  )
}

export default ErrorPage
