import { describe, test, expect } from 'vitest'
import deviceConfig from './deviceConfig'

describe('deviceConfig.js', () => {
  test('should check if fingerprint is defined', () => {
    const fingerprint = deviceConfig.fingerprint
    expect(fingerprint).toBeDefined()
    expect(fingerprint).not.toBeNull()
  })

  test("should check if user's information is defined", () => {
    const deviceInfo = deviceConfig.deviceInfo

    for (const info in deviceInfo) {
      expect(deviceInfo[info]).toBeDefined()
      expect(deviceInfo[info]).not.toBeNull()
    }
  })
})