require('module-alias/register')
const supertest = require('supertest')
const { app, server } = require('../../app')
const request = supertest(app)
const { connectDB, disconnectDB } = require('@config/db.js')
const { initializeDB, initialUser } = require('@tests/test_helpers/database.helpers.js')
const { it, describe, beforeEach, afterEach } = require('node:test')
const assert = require('node:assert/strict')


describe('Users route', () => {
  beforeEach(async () => {
    await connectDB()
  })

  afterEach(async () => {
    await disconnectDB()
    server.close()
  })

  describe('GET', () => {
    it('should return user and 200 when user is in database', async () => {
      await initializeDB()
      const res = await request.get(`/api/users/${initialUser.fingerprint}`)
      const user = res.body

      assert.equal(user.fingerprint, initialUser.fingerprint)
      assert.equal(res.status, 200)
    })

    it('should return 404 when the user is not in the database', async () => {
      const res = await request.get(`/api/users/${initialUser.fingerprint}`)
      assert.equal(res.status, 404)
    })
  })

})
