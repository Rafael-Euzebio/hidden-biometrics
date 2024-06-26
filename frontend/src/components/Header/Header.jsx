import React, { useState } from 'react'
import Navbar from '@components/Navbar/Navbar'
import Logo from '@components/Logo/Logo'
import '@styles/blocks/header.scss'
import '@styles/blocks/button.scss'
import { Close, Menu } from '@mui/icons-material'

const Header = () => {
  const [menuOpen, setmenuOpen] = useState(false)

  const handleClick = (e) => {
    setmenuOpen(!menuOpen)
  }

  return (
      <header className="header">
        <Logo />
        <button className="header__menu button" onClick={handleClick} aria-label="menu button" aria-expanded={menuOpen}>
          {!menuOpen ? <Menu className="button__icon" /> : <Close className="button__icon"/>}
        </button>
        <Navbar modifier={menuOpen ? 'navbar--open' : ''}/>
      </header>
  )
}

export default Header
