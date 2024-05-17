import { describe, test, expect } from 'vitest'
import userConfig from './userConfig'

describe('userConfig.js', () => {
  test('should check if fingerprint is defined', () => {
    const fingerprint = userConfig.fingerprint
    expect(fingerprint).toBeDefined()
    expect(fingerprint).not.toBeNull()
  })

  test("should check if user's information is defined", () => {
    const userInfo = userConfig.userInfo

    for (const info in userInfo) {
      expect(userInfo[info]).toBeDefined()
      expect(userInfo[info]).not.toBeNull()
    }
  })
})
