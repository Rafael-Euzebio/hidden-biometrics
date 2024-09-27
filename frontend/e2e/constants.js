const url = 'http://localhost:5173'

const mobileBrowsers = {
  chromium: 'Chrome',
  webkit: 'Mobile Safari'
}
const desktopBrowsers = {
  chromium: 'Chrome',
  firefox: 'Firefox',
  webkit: 'Safari'
}
const translations = {
  home: {
    en: {
      heading: 'Browser Fingerprint',
      research: 'Browser Fingerprinting: A survey',
    },
    pt: {
      heading: 'Impressão Digital de Navegador',
      research: 'Impressão Digital de Navegador: Uma pesquisa',
    }
  },
  error: {
    en: {
      errorMessage: 'Oops! An error happened!'
    },
    pt: {
      errorMessage: 'Oops! Ocorreu um erro!'
    }
  },
  statistics: {
    en: {
      label: 'users'
    },
    pt: {
      label: 'usuários'
    }
  }
}

export { url, desktopBrowsers, mobileBrowsers, translations }
