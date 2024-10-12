import React from 'react'
import { Email, GitHub, LinkedIn } from '@mui/icons-material'

const links = {
  pages: [
    {
      text: 'statistics',
      href: '/statistics'
    }
  ],
  contact: [
    {
      icon: <GitHub />,
      text: 'Github',
      label: 'Github',
      href: 'https://github.com/Rafael-Euzebio/hidden-biometrics'
    },
    {
      icon: <LinkedIn />,
      text: 'LinkedIn',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rafael-euzebio/'
    },
    {
      icon: <Email/>,
      text: 'Email',
      label: 'Email',
      href: 'mailto:rafaeleuzebiomendes@protonmail.com'
    }
  ],

  techstack: [
    {
      text: 'Vite',
      href: 'https://vite.dev/'
    },
    {
      text: 'React',
      href: 'https://react.dev/'
    },
    {
      text: 'ClientJS',
      href: 'http://clientjs.org/'
    }
  ]
}

export default links
