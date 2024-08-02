require('module-alias/register')
const User = require('@models/user')

const initialUser = {
  fingerprint: '2297231874',
  os: 'Windows',
  browser: 'Firefox',
}

const invalidUser = {
  fingerprint: '2297231874',
  os: 'Windows',
}

const initializeDB = async () => {
  const user = new User(initialUser)

  await user.save()
}

module.exports = { initializeDB, initialUser, invalidUser}
