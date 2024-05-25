import React from 'react'
import PropTypes from 'prop-types'
import '@styles/blocks/navbar.scss'

const NavbarItem = ({ component }) => {
  return (
    <li className = "navbar__item">
      {component}
    </li>
  )
}

NavbarItem.propTypes = {
  component: PropTypes.element.isRequired
}

export default NavbarItem
