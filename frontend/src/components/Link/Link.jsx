import React from 'react'
import PropTypes from 'prop-types'
import '@styles/blocks/link.scss'

const Link = ({ icon, text, href, modifier }) => {
  return (
    <a className={ `link ${modifier} `} href={href}>
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
