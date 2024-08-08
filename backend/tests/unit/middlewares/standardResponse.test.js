require('module-alias/register')
const { standardResponse } = require('@middlewares/standardResponse')
const { mock, it, describe, beforeEach, afterEach } = require('node:test')
const httpMocks = require('node-mocks-http')
const assert = require('node:assert/strict')


describe('standardResponse middleware', () => {
  let req, res, next
  beforeEach(() => {
    req = httpMocks.createRequest({})
    res = httpMocks.createResponse({})
    next = mock.fn(() => {})
    standardResponse(req, res, next)
  })

  afterEach(() => {
    req = res = next = null
  })

  it('should find function standardResponse in res object', async () => {
    assert.ok(res.standardResponse)
  })

  describe('when response is successful', () => {
    beforeEach(() => {
      res.standardResponse(200, 'Success', 'mockData')
    })
    
    it('should send 200 status code', () => {
      const status = res._getStatusCode()
      assert.equal(status, 200)
    }) 

    it('should send correct fields in body', () => {
      const body = JSON.parse(res._getData())
      assert.ok(body)
      assert.equal(body.message, 'Success')
      assert.equal(body.data, 'mockData')
    }) 

    it('should not send errors', () => {
      const body = JSON.parse(res._getData())
      assert.equal(body.error, null)
    }) 
  })

  describe('when response fails', () => {
    beforeEach(() => {
      res.standardResponse(400, 'Error', null, 'mockError')
    })

    it('should send 400 status code', () => {
      const status = res._getStatusCode()
      assert.equal(status, 400)
    })

    it('should send errors array in body', () => {
      const { error } = JSON.parse(res._getData())

      assert.equal(error, 'mockError')
    })
  })
})
