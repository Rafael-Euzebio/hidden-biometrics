import React from 'react'
import Header from './components/Header/Header'
import User from '@components/User/User'
import Link from '@components/Link/Link'
import Footer from '@components/Footer/Footer'
import userConfig from './utils/userConfig'
import '@styles/reset.scss'
import '@styles/blocks/app.scss'
import '@styles/blocks/main.scss'
import '@styles/blocks/header.scss'
import { useTranslation } from 'react-i18next'

function App () {
  const { fingerprint, userInfo } = userConfig

  const { t } = useTranslation()

  return (
    <div className="app">
      <Header />
      <main className="main">
        <h2 className="main__heading"> { t('main.heading-2') }</h2>
        <p className="main__description">
          { t('main.description') }
        </p>
        <Link
          text={t('research')}
          href="https://arxiv.org/pdf/1905.01051"
          modifier="link--color-red"
        />
        <User fingerprint={fingerprint} userInfo={userInfo} />
      </main>
      <Footer />
    </div>
  )
}

export default App
