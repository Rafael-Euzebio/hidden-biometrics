import React from 'react'
import User from '@components/User/User'
import Navbar from '@components/Navbar/Navbar'
import Logo from '@components/Logo/Logo'
import userConfig from './utils/userConfig'
import '@styles/reset.scss'
import '@styles/blocks/app.scss'
import '@styles/blocks/main.scss'
import '@styles/blocks/header.scss'
import Link from '@components/Link/Link'

function App () {
  const { fingerprint, userInfo } = userConfig

  return (
    <div className="app">
      <header className="header">
        <Logo />
        <Navbar />
      </header>
      <main className="main">
        <h2 className="main__heading"> Browser Fingerprinting</h2>
        <p className="main__description">
          "(...) a set of information related to a user’s device from the hardware to the operating system to the browser and its configuration (...)
          It does not leave any trace (...) the user has no control over the collection process. <br/>
          (...) it can be identified on the web without the need of other identifiers like a cookie or an IP address."
        </p>
        <Link 
          text="Browser Fingerprinting: a survey" 
          href="https://arxiv.org/pdf/1905.01051" 
          modifier="link--type-text"
        />
        <User fingerprint={fingerprint} userInfo={userInfo} />
      </main>
    </div>
  )
}

export default App
