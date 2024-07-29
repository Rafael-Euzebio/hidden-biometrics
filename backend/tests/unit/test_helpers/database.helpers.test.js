require('module-alias/register')
const User = require('@models/user')
const { connectDB, disconnectDB } = require('@config/db')
const { insertInitialUser, initialUser } = require('@tests/test_helpers/database.helpers')
const { it, describe, beforeEach, afterEach } = require('node:test')
const assert = require('node:assert/strict')


describe('database helpers', () => {
  beforeEach(() => {
    connectDB()
  })

  it('should find inserted user in database', async () => {
    insertInitialUser()
    const insertedUser = await User.findOne({ 
      fingerprint: initialUser.fingerprint 
    })
    assert.ok(insertedUser)
    assert.equal(insertedUser.fingerprint, initialUser.fingerprint)
  })

  afterEach(() => {
    disconnectDB()
  })
})
