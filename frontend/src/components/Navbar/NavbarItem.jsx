import React from 'react'
import PropTypes from 'prop-types'
import '@styles/blocks/navbar.scss'

const NavbarItem = ({ component }) => {
  return (
    <div className = "navbar__item">
      {component}
    </div>
  )
}

NavbarItem.propTypes = {
  component: PropTypes.element.isRequired
}

export default NavbarItem
