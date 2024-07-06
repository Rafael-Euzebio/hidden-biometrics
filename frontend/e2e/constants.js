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
  en: {
    heading: 'Browser Fingerprint',
    description: 'a set of information',
    research: 'Browser Fingerprinting: A survey',
    boxUpper: 'Your Fingerprint:',
    boxLower: 'Try switching to an anonymous tab'
  },
  pt: {
    heading: 'Impressão Digital de Navegador',
    description: 'um conjunto de informações',
    research: 'Impressão Digital de Navegador: Uma pesquisa',
    boxUpper: 'Sua Impressão Digital:',
    boxLower: 'Tente trocar para uma aba anônima'
  }
}

export { url, desktopBrowsers, mobileBrowsers, translations }
