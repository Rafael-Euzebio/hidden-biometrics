import React, { useState } from 'react'
import i18n from '../../i18n'
import '@styles/blocks/select.scss'
import '@styles/blocks/link.scss'
import '@styles/blocks/navbar.scss'

const LanguageSwitcher = () => {
  const [selectedLanguage, setselectedLanguage] = useState(i18n.resolvedLanguage)

  const changeLanguage = (event) => {
    const language = event.target.value
    setselectedLanguage(language)
    i18n.changeLanguage(language)
  }

  return (
    <select className="select" onChange={changeLanguage} value={selectedLanguage} aria-label="language selector">
      <option className="select__option" value="pt">&#x1F1E7;&#x1F1F7; Português</option>
      <option className="select__option" value="en"> &#x1F1FA;&#x1F1F8; English</option>
    </select>
  )
}

export default LanguageSwitcher
