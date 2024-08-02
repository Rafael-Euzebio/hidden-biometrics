require('module-alias/register')
const User = require('@models/user')

const initialUser = {
  fingerprint: '2297231874',
  os: 'Windows',
  browser: 'Firefox',
  ip: '192.168.256.1',
}

const invalidUser = {
  fingerprint: '2297231874',
  os: 'Windows',
  ip: '192.168.256.1',
}

const initializeDB = async () => {
  const user = new User(initialUser)

  await user.save()
}

module.exports = { initializeDB, initialUser, invalidUser}
