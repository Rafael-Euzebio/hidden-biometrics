import React from 'react'
import User from './components/User'
import userConfig from './utils/userConfig'

function App () {
  const { fingerprint, userInfo } = userConfig
  return (
    <>
      <h1>Browser Fingerprinting</h1>
      <p>A technique used to identify users by their browser and device characteristics, without relying on their IP address.</p>
      <User fingerprint={fingerprint} userInfo={userInfo} />
    </>
  )
}

export default App
