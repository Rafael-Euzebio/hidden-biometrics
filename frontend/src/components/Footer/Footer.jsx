import React from 'react'
import Link from '@components/Link/Link'
import List from '@components/List/List'
import links from '@utils/links'
import '@styles/blocks/footer.scss'

const Footer = () => {
  const { contact, techstack } = links
  const techStackLinks = techstack.map((link) => {
    return <Link
      text={link.text}
      href={link.href}
      label={link.label}
      key={link.href}
      modifier="link--color-purple" />
  })

  const contactLinks = Object.keys(contact).map((obj) => {
    return <Link
      text={contact[obj].text}
      href={contact[obj].href}
      label={contact[obj].label}
      key={contact[obj].href}
      modifier="link--color-purple" />
  })

  return (
    <footer className="footer">
      <div className="footer__content">
        <List items={techStackLinks} modifier="list--horizontal"/>
      </div>
      <div className="footer__content">
        <List items={contactLinks} modifier="list--horizontal"/>
      </div>
    </footer>
  )
}

export default Footer
