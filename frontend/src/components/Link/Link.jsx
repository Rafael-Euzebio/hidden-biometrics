import React from 'react'
import PropTypes from 'prop-types'
import '@styles/blocks/link.scss'

const Link = ({ icon, text, label, href, modifier }) => {
  return (
    <a className={ `link ${modifier} `} aria-label={label} href={href}>
      {text}
      {icon}
    </a>
  )
}

Link.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string,
  label: PropTypes.string,
  labelChecker: (props) => {
    if (!props.text && !props.label) {
      return new Error('Links should have text content or a label')
    }
  },
  href: PropTypes.string.isRequired,
  modifier: PropTypes.string
}
export default Link
