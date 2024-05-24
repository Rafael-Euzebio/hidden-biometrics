import React from 'react'
import { Fingerprint } from '@mui/icons-material'
import '../styles/blocks/logo.scss'
import '../styles/blocks/link.scss'

const Logo = () => {
  return (
    <a className="link logo" href="/">
      <Fingerprint className="logo__icon" fontSize="large"/>
      <h1 className="logo__title">Hidden Biometrics</h1>
    </a>
  )
}

export default Logo
