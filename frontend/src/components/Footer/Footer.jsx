import React from 'react'
import Link from '@components/Link/Link'
import List from '@components/List/List'
import '@styles/blocks/footer.scss'

const Footer = () => {
  const techStack = [
    {
      text: 'Vite',
      label: 'Vite',
      href: 'https://react.dev/'
    },
    {
      text: 'React',
      label: 'React',
      href: 'https://react.dev/'
    },
    {
      text: 'ClientJS',
      label: 'ClientJS',
      href: 'https://react.dev/'
    }
  ]

  const contact = [
    {
      text: 'Github',
      label: 'Github',
      href: 'https://github.com/Rafael-Euzebio/hidden-biometrics'
    },
    {
      text: 'LinkedIn',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rafael-euzebio/'
    },
    {
      text: 'Email',
      label: 'Email',
      href: 'mailto:rafaeleuzebiomendes@protonmail.com'
    }
  ]

  const techStackLinks = techStack.map((obj) => {
    return <Link
      text={obj.text}
      href={obj.href}
      label={obj.label}
      key={obj.href}
      modifier="link--color-purple" />
  })

  const contactLinks = contact.map((obj) => {
    return <Link
      text={obj.text}
      href={obj.href}
      label={obj.label}
      key={obj.href}
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
