require('module-alias/register')
const User = require('@models/user')

const insertInitialUser = () => {
  const user = new User({
    fingerprint: '2297231874',
    os: 'Windows',
    browser: 'Firefox',
    ip: '192.168.256.1',
  })

  user.save()
}

module.exports = { insertInitialUser }
