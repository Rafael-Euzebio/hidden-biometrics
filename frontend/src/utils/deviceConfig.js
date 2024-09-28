import { ClientJS } from 'clientjs'

const client = new ClientJS()

const fingerprint = client.getFingerprint()
const deviceInfo = {
  userAgent: {
    text: 'User Agent',
    value: client.getUserAgent()
  },
  browser: {
    text: 'Browser',
    value: (function (getBrowser) {

      function getBrave () {
        if (window.navigator.brave != undefined) {
          if (window.navigator.brave.isBrave.name == "isBrave") {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      }
      
      return getBrave() ? 'Brave': client.getBrowser()
    })()
  },
  browserVersion: {
    text: 'Browser Version',
    value: client.getBrowserVersion()
  },
  os: {
    text: 'Operational System',
    value: client.getOS()
  },
  osVersion: {
    text: 'OS Version',
    value: client.getOSVersion()
  },
  deviceType: {
    text: 'Device Type',
    value: client.isMobile() === true ? "Mobile" : "Desktop" 
  },
  cpu: {
    text: 'CPU',
    value: client.getCPU()
  },
  resolution: {
    text: 'Current Resolution',
    value: client.getCurrentResolution()
  },
  plugins: {
    text: 'Installed Plugins',
    value: client.getPlugins()
  },
  fonts: {
    text: 'Installed Fonts',
    value: client.getFonts()
  }
}
export default { fingerprint, deviceInfo }
