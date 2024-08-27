import React from 'react'
import '@styles/blocks/box.scss'
import { useRouteError } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Error = () => {
  const { t } = useTranslation()
  const error = useRouteError()
  console.log(error)
  return (
    <main className="main main--centered">
      <div className="box">
        <p className="box__content">{t('errorBox.upper')}</p>
        <p className="box__content--large">{error.status}</p>
        <p className="box__content">{t(`errorBox.lower.${error.statusText}`, error.status)}</p>
      </div>
    </main>
  )
}

export default Error
