import React, { useState } from 'react'
import Navbar from '@components/Navbar/Navbar'
import Logo from '@components/Logo/Logo'
import '@styles/blocks/header.scss'
import '@styles/blocks/button.scss'
import { Close, Menu } from '@mui/icons-material'

const Header = () => {
  const [menuOpen, setmenuOpen] = useState(false)

  const handleClick = () => {
    setmenuOpen(!menuOpen)
  }

  return (
      <header className="header">
        <Logo />
        <button className="header__menu button" aria-label="menu button" onClick={handleClick}>
          {!menuOpen ? <Menu className="button__icon" /> : <Close className="button__icon"/>}
        </button>
        <Navbar modifier={menuOpen ? 'navbar--open' : ''}/>
      </header>
  )
}

export default Header
