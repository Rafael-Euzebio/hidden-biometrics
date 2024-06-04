import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '@styles/blocks/collapsible.scss'
import '@styles/blocks/button.scss'
import { ArrowDropDown, ArrowRight } from '@mui/icons-material'

const Collapsible = ({ label, content }) => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  const arrow = isCollapsed ? <ArrowRight /> : <ArrowDropDown />

  const collapsibleContent = <p
    className={
      `collapsible__content ${isCollapsed
      ? ''
      : 'collapsible__content--open'}`
    }>
    { content }
  </p>

  return (
    <div className="collapsible">
      <button
        className = "button button--text-only"
        onClick={toggleCollapse}>
        { arrow } { label }
      </button>
      { collapsibleContent }
    </div>
  )
}

Collapsible.propTypes = {
  label: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}
export default Collapsible
