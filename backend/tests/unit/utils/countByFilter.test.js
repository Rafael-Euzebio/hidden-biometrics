require('module-alias/register')
const countByFilter = require('@utils/countByFilter')
const { it, describe } = require('node:test')
const assert = require('node:assert/strict')


describe('countByFilter', () => {
  const users = [
    { browser: 'Opera' },
    { browser: 'Opera' },
    { browser: 'Safari' },
    { browser: 'Firefox' },
    { browser: 'Mobile Safari' },
    { browser: 'Mobile Safari' },
    { browser: 'Mobile Safari' },
    { browser: 'Firefox' },
  ]

  it('should return correct browser count', async () => {
    const browserCount = countByFilter(users, 'browser')
    assert.equal(browserCount.Opera, 2)
    assert.equal(browserCount.Safari, 1)
    assert.equal(browserCount['Mobile Safari'], 3)
    assert.equal(browserCount['Firefox'], 2)
  })
})
