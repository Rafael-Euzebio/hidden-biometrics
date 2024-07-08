import React from 'react'
import { Email, GitHub, LinkedIn } from '@mui/icons-material'

const links = {
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
}

export default links
