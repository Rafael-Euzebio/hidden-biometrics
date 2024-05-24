import React from 'react'
import User from './components/User'
import Logo from './components/Logo'
import userConfig from './utils/userConfig'
import './styles/reset.scss'
import './styles/blocks/app.scss'
import './styles/blocks/main.scss'

function App () {
  const { fingerprint, userInfo } = userConfig
  return (
    <div className="app">
      <header className="header">
        <Logo />
      <main className="main">
        <h1 className="main__heading"> Browser Fingerprinting</h1>
        <p className="main__description">A technique used to identify users by their browser and device characteristics, without relying on their IP address.</p>
        <User fingerprint={fingerprint} userInfo={userInfo} />
      </main>
    </div>
  )
}

export default App
