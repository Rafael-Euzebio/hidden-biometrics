import React from 'react'
import NavbarItem from './NavbarItem'
import { Email, GitHub, LinkedIn } from '@mui/icons-material'
import Link from '@components/Link/Link'
import List from '@components/List/List'
import '@styles/blocks/navbar.scss'

const Navbar = () => {
  const links = [
    { text: '', icon: <GitHub />, href: 'https://github.com/Rafael-Euzebio/hidden-biometrics' },
    { text: '', icon: <LinkedIn />, href: 'https://www.linkedin.com/in/rafael-euzebio/' },
    { text: '', icon: <Email />, href: 'mailto:rafaeleuzebiomendes@protonmail.com' }
  ]

  const navbarItems = links.map((link, index) => (
    <NavbarItem
      key={index}
      component={<Link
        text={link.text}
        icon={link.icon} href={link.href}
        modifier='link--type-icon'
      />}
    />
  ))

  return (
    <nav className="navbar">
      <List
        modifier="list--horizontal"
        items={navbarItems}
      />
    </nav>
  )
}

export default Navbar
