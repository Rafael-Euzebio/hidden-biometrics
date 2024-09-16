const express = require('express')
const statisticsRoute = express.Router()
const User = require('@models/user')
const countByFilter = require('@utils/countByFilter')

statisticsRoute.get('/', async (req, res) => {
  let users
  try {
    users = await User.find({}) 
  } catch (error) {
    return res.standardResponse(500, 'Error', error.message) 
  }
  const browsers = countByFilter(users, 'browser') 
  const os = countByFilter(users, 'os') 
  const deviceType = countByFilter(users, 'deviceType') 
  const statistics = { browsers, os, deviceType }

  return res.standardResponse(200, 'Success', statistics)
})

module.exports = statisticsRoute
