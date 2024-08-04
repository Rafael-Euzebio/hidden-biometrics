require('module-alias/register')
const User = require('@models/user')


const validUser = {
  fingerprint: '2297231874',
  os: 'Linux',
  browser: 'Firefox',
}

const invalidUser = {
  fingerprint: '2297231874',
  os: 'Windows',
}

const initialUser = {
  fingerprint: '2297231874',
  os: 'Windows',
  browser: 'Firefox',
  accessCount: 1,
  ip: '::ffff:127.0.0.1',
}

const initializeDB = async () => {
  const user = new User(initialUser)

  await user.save()
}

module.exports = { initializeDB, initialUser, invalidUser, validUser}
