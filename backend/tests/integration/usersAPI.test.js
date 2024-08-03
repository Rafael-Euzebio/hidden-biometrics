require('module-alias/register')
const supertest = require('supertest')
const { app, server } = require('../../app')
const request = supertest(app)
const { connectDB, disconnectDB } = require('@config/db.js')
const { it, describe, beforeEach, afterEach } = require('node:test')
const assert = require('node:assert/strict')
const { initializeDB, initialUser, invalidUser} = require('@tests/test_helpers/database.helpers.js')


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

    it('should return 404 when user is not in the database', async () => {
      const res = await request.get(`/api/users/${initialUser.fingerprint}`)
      assert.equal(res.status, 404)
    })
  })

  describe('POST', () => {
    it('should return user and 201 when user is successfully created', async () => {
      const res = await request.post(`/api/users`).send(initialUser)
      assert.equal(res.status, 201)
      const  result = res.body
      assert.ok(result['_id'])
      for (const field in initialUser) {
        assert.equal(result[field], initialUser[field])
      }
    })

    it('should return 400 and an error when required fields are not present', async () => {
      const res = await request.post(`/api/users`).send(invalidUser)
      assert.equal(res.status, 400)
      assert.ok(res.body.error)
    })

    it('should return 409 and an error when fingerprint already exists in the database', async () => {
      initializeDB()
      const res = await request.post(`/api/users`).send(initialUser)
      assert.equal(res.status, 409)
      assert.ok(res.body.error)
    })
  })
})
