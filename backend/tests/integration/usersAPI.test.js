require('module-alias/register')
const supertest = require('supertest')
const { app, server } = require('../../app')
const request = supertest(app)
const { connectDB, disconnectDB } = require('@config/db.js')
const { it, describe, beforeEach, afterEach } = require('node:test')
const assert = require('node:assert/strict')
const { initializeDB, initialUser, validUser, invalidUser } = require('@tests/test_helpers/database.helpers.js')
const User = require('@models/user')


describe('Users route', () => {
  beforeEach(async () => {
    await connectDB()
  })

  afterEach(async () => {
    await disconnectDB()
    server.close()
  })

  describe('GET', () => {
    describe('Success', () => {
      describe('Route', () => {
        beforeEach(async () => {
          await initializeDB()
        })

        it('should return 200 and all users when a blank request is sent', async () => {
          const res = await request.get(`/api/users/${validUser.fingerprint}`)
          const { data } = res.body

          assert.equal(data.fingerprint, validUser.fingerprint)
          assert.equal(res.status, 200)
        })
        it('should return user and 200 when user is in database', async () => {
          const res = await request.get(`/api/users/${validUser.fingerprint}`)
          const { data } = res.body

          assert.equal(data.fingerprint, validUser.fingerprint)
          assert.equal(res.status, 200)
        })
      })
    })

    describe('Client Error', () => {
      it('should return 404 when user is not in the database', async () => {
        const res = await request.get(`/api/users/${validUser.fingerprint}`)
        const { error } = res.body
        assert.equal(res.status, 404)
        assert.ok(error)
      })
    })
  })

  describe('POST', () => {
    describe('Success', () => {
      let res
      beforeEach(async () => {
        res = await request.post(`/api/users`).send(validUser)
      })

      afterEach(() => {
        res = null
      })

      describe('Route', () => {
        it('should return user and 201 when user is successfully created', async () => {
          const  { data } = res.body
          assert.equal(res.status, 201)
          assert.ok(data['_id'])
          for (const field in validUser) {
            assert.equal(data[field], validUser[field])
          }
        })

        it('should return access count of 1 when user is created', async () => {
          const { data } = res.body
          assert.equal(data.accessCount, 1)
        })
      })

      describe('Database', () => {
        it('should find user in database after request with correct fields and values', async () => {
          const userInDB = await User.findOne({ fingerprint: validUser.fingerprint })
          assert.ok(userInDB)

          for (const field in validUser) {
            assert.equal(validUser[field], userInDB[field])
          }
        })

        it('should have access count of 1 when created', async () => {
          const userInDB = await User.findOne({ fingerprint: validUser.fingerprint })
          assert.equal(userInDB.accessCount, 1)
        })
      })
    })

    describe('Client error', () => {
      describe('Routes', () => {
        it('should return 400 and an error when required fields are not present', async () => {
          const res = await request.post(`/api/users`).send(invalidUser)
          const { error } = res.body
          assert.equal(res.status, 400)
          assert.ok(error)
        })

        it('should return 409 and an error when fingerprint already exists in the database', async () => {
          await initializeDB()
          const res = await request.post(`/api/users`).send(validUser)
          const { error } = res.body
          assert.equal(res.status, 409)
          assert.ok(error)
        })
      })

      describe('Database', () => {
        it('should not add user to the database when required fields are not present', async () => {
          await request.post(`/api/users`).send(invalidUser)
          const userInDB = await User.findOne({ fingerprint: invalidUser.fingerprint })

          assert.equal(userInDB, null)
        })

        it('should not add user to the database when user is already present', async () => {
          await initializeDB()
          await request.post(`/api/users`).send(validUser)
          const usersInDB = await User.find({ fingerprint: validUser.fingerprint })
          assert.equal(usersInDB.length, 1)
        })
      })
    })
  })

  describe('PATCH', () => {
    describe('Success', () => {
      describe('Routes', () => {
        it('should return 200 and user with access count increased by one when user exists in the database', async () => {
          await initializeDB()
          const res = await request.patch(`/api/users/${initialUser.fingerprint}`)
          const { data } = res.body
          assert.equal(res.status, 200)
          assert.equal(data.accessCount, initialUser.accessCount + 1)
        })
      })

      describe('Database', () => {
        it('should find user in database with increased access count', async () => {
          await initializeDB()
          await request.patch(`/api/users/${initialUser.fingerprint}`)
          const userInDB = await User.findOne({ fingerprint: initialUser.fingerprint })
          assert.equal(userInDB.accessCount, 2)
        })
      })
    })

    describe('Client Error', () => {
      describe('Route', () => {
        it('should return 404 when user is not in database', async () => {
          const res = await request.patch(`/api/users/${initialUser.fingerprint}`)
          assert.equal(res.status, 404)
        })
      })

      describe('Database', () => {
        it('should not insert in the database when user is not present', async () => {
          await request.patch(`/api/users/${initialUser.fingerprint}`)
          const userInDB = await User.findOne({ fingerprint: initialUser.fingerprint })
          assert.equal(userInDB, null)
        })
      })
    })
  })

  describe('DELETE', () => {
    describe('Success', () => {
      let res
      beforeEach(async () => {
        initializeDB()
        res = await request.delete(`/api/users/${initialUser.fingerprint}`)
      })

      describe('Route', () => {
        it('should send 200 and user data when user is in the database', async () => {
          const { data } = res.body
          assert.equal(res.status, 200)
          assert.equal(data.fingerprint, initialUser.fingerprint)
        })
      })

      describe('Database', () => {
        it('should not find user in database after deletion request', async () => {
          const userInDB = await User.findOne({ fingerprint: initialUser.fingerprint })      
          assert.equal(userInDB, null)
        })
      })
    })

    describe('Client Error', () => {
      it('should send 404 when user is not in the database', async () => {
        const res = await request.delete(`/api/users/${initialUser.fingerprint}`)
        assert.equal(res.status, 404)
      }) 
    })
  })
})
