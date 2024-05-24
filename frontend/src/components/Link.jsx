import React from 'react'
import PropTypes from 'prop-types'
import '../styles/blocks/link.scss'

const Link = ({ icon, text, href }) => {
  return (
    <a className="link link--type-navbar" href={href}>
      {text}
      {icon}
    </a>
  )
}

Link.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string,
  href: PropTypes.string.isRequired
}
export default Link
