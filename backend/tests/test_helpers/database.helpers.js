require('module-alias/register')
const User = require('@models/user')

const initialUser = {
  fingerprint: '2297231874',
  os: 'Windows',
  browser: 'Firefox',
  ip: '192.168.256.1',
}
const insertInitialUser = () => {
  const user = new User(initialUser)

  user.save()
}

module.exports = { insertInitialUser, initialUser }
