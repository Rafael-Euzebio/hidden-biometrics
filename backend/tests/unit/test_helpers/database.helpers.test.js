require('module-alias/register')
const User = require('@models/user')
const { connectDB, disconnectDB } = require('@config/db')
const { initializeDB, initialUsers } = require('@tests/test_helpers/database.helpers')
const { it, describe, beforeEach, afterEach } = require('node:test')
const assert = require('node:assert/strict')


describe('database helpers', () => {
  beforeEach(async () => {
    await connectDB()
  })

  afterEach(async () => {
    await disconnectDB()
  })

  it('should find inserted user in database', async () => {
    await initializeDB()
    const insertedUser = await User.findOne({ 
      fingerprint: initialUsers[0].fingerprint 
    })
    assert.ok(insertedUser)
    assert.equal(insertedUser.fingerprint, initialUsers[0].fingerprint)
  })

})