require('module-alias/register')
const { connectDB, disconnectDB } = require('@config/db.js')
const mongoose = require('mongoose')
const { it, describe } = require('node:test')
const assert = require('node:assert/strict')


describe('Database connection', () => {
  it('should connect to the database', async (t) => {
    t.mock.method(mongoose, 'connect')
    await connectDB()
    assert.equal(mongoose.connect.mock.callCount(), 1)
  })

  it('should close database connection', async (t) => {
    t.mock.method(mongoose.connection, 'close')
    await disconnectDB()
    assert.equal(mongoose.connection.close.mock.callCount(), 1)
  })
})
