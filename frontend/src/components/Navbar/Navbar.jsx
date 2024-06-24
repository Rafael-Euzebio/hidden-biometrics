import React from 'react'
import NavbarItem from './NavbarItem'
import { Email, GitHub, LinkedIn } from '@mui/icons-material'
import Link from '@components/Link/Link'
import List from '@components/List/List'
import PropTypes from 'prop-types'
import '@styles/blocks/navbar.scss'

const Navbar = ({ modifier }) => {
  const links = [
    {
      text: '',
      icon: <GitHub />,
      label: 'Github',
      href: 'https://github.com/Rafael-Euzebio/hidden-biometrics'
    },
    {
      text: '',
      icon: <LinkedIn />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rafael-euzebio/'
    },
    {
      text: '',
      icon: <Email />,
      label: 'Email',
      href: 'mailto:rafaeleuzebiomendes@protonmail.com'
    }
  ]

  const navbarItems = links.map((link, index) => (
    <NavbarItem
      key={index}
      component={
        <Link
          text={link.text}
          icon={link.icon}
          label={link.label}
          href={link.href}
          modifier='link--type-icon'
        />
      }
    />
  ))

  return (
    <nav className={ `navbar ${modifier}` }>
      <List
        modifier="list--horizontal"
        items={navbarItems}
      />
    </nav>
  )
}

Navbar.propTypes = {
  modifier: PropTypes.string
}
export default Navbar
