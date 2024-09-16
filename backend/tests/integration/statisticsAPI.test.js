const supertest = require('supertest')
const { app, server } = require('../../app.js')
const request = supertest(app)
const { it, describe, beforeEach, afterEach } = require('node:test')
const { connectDB, disconnectDB } = require('@config/db.js')
const { initializeDB } = require('@tests/test_helpers/database.helpers')
const assert = require('node:assert/strict')


describe('Statistics route', () => {
 beforeEach(async () => {
   await connectDB()
   await initializeDB()
 })

 afterEach(async () => {
   await disconnectDB()
   server.close()
 })

 describe('GET', () => {
   it('should return user count categorized by OS and Browser', async () => {
     const res = await request.get('/api/statistics')
     const { payload } = res.body
     assert.equal(res.status, 200)
     assert.ok(Object.keys(payload.browsers).length > 0)
     assert.ok(Object.keys(payload.os).length > 0)
   })

   it("should return correct browser's count", async () => {
     const res = await request.get('/api/statistics')
     const { browsers } = res.body.payload
     assert.equal(res.status, 200)
     assert.equal(browsers.Chrome, 3)
     assert.equal(browsers.Firefox, 2)
     assert.equal(browsers.Safari, 1)
     assert.equal(browsers['Mobile Safari'], 1)
   })

   it("should return correct os count", async () => {
     const res = await request.get('/api/statistics')
     const { os } = res.body.payload

     assert.equal(os.Windows, 2)
     assert.equal(os.Linux, 2)
     assert.equal(os.Mac, 2)
     assert.equal(os.IOS, 1)
   })

   it("should return correct device type count", async () => {
     const res = await request.get('/api/statistics')
     const { deviceType } = res.body.payload

     assert.equal(deviceType["Desktop"], 6)
     assert.equal(deviceType["Mobile"], 1)
   })
 })
})
