import React from 'react'
import NavbarItem from './NavbarItem'
import { Email, GitHub, LinkedIn } from '@mui/icons-material'
import Link from '@components/Link/Link'
import '@styles/blocks/navbar.scss'

const Navbar = () => {
  const links = [
    { text: '', icon: <GitHub />, href: 'https://github.com/Rafael-Euzebio/hidden-biometrics' },
    { text: '', icon: <LinkedIn/>, href: 'https://www.linkedin.com/in/rafael-euzebio/' },
    { text: '', icon: <Email />, href: 'mailto:rafaeleuzebiomendes@protonmail.com' }
  ]

  return (
      <nav className="navbar">
        <ul className="navbar">
          { links.map((link) => {
            return (
              <NavbarItem component={
                <Link
                  text={ link.text}
                  icon={ link.icon }
                  href={ link.href } 
                  modifier="link--type-icon"
                /> 
              } key={link.href}
              />
            )
          }) }
        </ul>
      </nav>
  )
}

export default Navbar
