import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '@styles/blocks/collapsible.scss'
import '@styles/blocks/button.scss'
import { ArrowDropDown, ArrowRight } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'

const Collapsible = ({ label, content }) => {
  const { t } = useTranslation()

  const [isOpen, setIsOpen] = useState(false)

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  const arrow = isOpen ? <ArrowDropDown /> : <ArrowRight />

  const collapsibleContent = <p
    className={
      `collapsible__content ${isOpen
      ? 'collapsible__content--open'
      : ''}`
    }>
    { content }
  </p>

  return (
    <div className="collapsible">
      <button
        className = "button button--text-only"
        onClick={toggleCollapse}
        aria-expanded={isOpen}
        >
        { arrow } {t(`main.collapsibles.${label}`)}
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
