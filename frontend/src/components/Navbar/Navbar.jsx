import React from 'react'
import NavbarItem from './NavbarItem'
import Link from '@components/Link/Link'
import List from '@components/List/List'
import PropTypes from 'prop-types'
import LanguageSwitcher from '@components/LanguageSwitcher/LanguageSwitcher'
import links from '@utils/links'
import '@styles/blocks/navbar.scss'
import { useTranslation } from 'react-i18next'

const Navbar = ({ modifier }) => {
  const { contact } = links
  const { t } = useTranslation()

  const navbarLinks = contact.map((link) => (
    <NavbarItem
      key={link.href}
      component={
        <Link
          text={link?.icon ? '' : t(`navbar.${link.text}`)}
          icon={link?.icon}
          label={link.label}
          href={link.href}
          modifier='link--icon link--color-red'
        />
      }
    />
  ))

  return (
    <nav className={ `navbar ${modifier}` }>
      <List
        modifier="list--horizontal"
        items={[...navbarLinks, <NavbarItem component={<LanguageSwitcher />} key="languageSwitcher" />]}
      />
    </nav>
  )
}

Navbar.propTypes = {
  modifier: PropTypes.string
}
export default Navbar
