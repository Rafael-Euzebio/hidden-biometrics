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

const initialUsers = [
  {
    fingerprint: '2297231874',
    os: 'Windows',
    browser: 'Chrome',
    accessCount: 1,
    ip: '::ffff:127.0.0.1',
  },
  {
    fingerprint: '8407260768',
    os: 'Linux',
    browser: 'Firefox',
    accessCount: 1,
    ip: '::ffff:127.0.0.1',
  },
  {
    fingerprint: '736378210',
    os: 'IOS',
    browser: 'Mobile Safari',
    accessCount: 1,
    ip: '::ffff:127.0.0.1',
  },
  {
    fingerprint: '9914648825',
    os: 'Mac',
    browser: 'Safari',
    accessCount: 1,
    ip: '::ffff:127.0.0.1',
  },
  {
    fingerprint: '9843012394',
    os: 'Mac',
    browser: 'Chrome',
    accessCount: 1,
    ip: '::ffff:127.0.0.1',
  },
  {
    fingerprint: '8329872370',
    os: 'Linux',
    browser: 'Chrome',
    accessCount: 1,
    ip: '::ffff:127.0.0.1',
  },
  {
    fingerprint: '4828296441',
    os: 'Windows',
    browser: 'Firefox',
    accessCount: 1,
    ip: '::ffff:127.0.0.1',
  },

]

const initializeDB = async () => {
  for (const user of initialUsers) {
    const newUser = new User(user)
    await newUser.save()
  }
}

module.exports = { initializeDB, initialUsers, invalidUser, validUser}
