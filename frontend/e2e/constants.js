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
      description: 'a set of information',
      research: 'Browser Fingerprinting: A survey',
      boxUpper: 'Your Fingerprint:',
      boxLowerVPN: 'Try switching to an anonymous tab',
      boxLowerAccessCount: 'You have viewed this page'
    },
    pt: {
      heading: 'Impressão Digital de Navegador',
      description: 'um conjunto de informações',
      research: 'Impressão Digital de Navegador: Uma pesquisa',
      boxUpper: 'Sua Impressão Digital:',
      boxLowerVPN: 'Tente trocar para uma aba anônima',
      boxLowerAccessCount: 'Você visualizou essa página'
    }
  },
  error: {
    en: {
      errorMessage: 'Oops! An error happened!'
    },
    pt: {
      errorMessage: 'Oops! Ocorreu um erro!'
    }
  }
}

export { url, desktopBrowsers, mobileBrowsers, translations }
