const express = require('express')
const usersRoute = express.Router()
const User = require('@models/user')

usersRoute.get('/', async (req, res) => {
  let users 
  try {
    users = await User.find({})
  } catch(error) {
    return res.standardResponse(500, 'Error', null, error.message)
  }
    return res.standardResponse(200, 'Success', users)
})

usersRoute.get('/:fingerprint', async (req, res) => {
  const fingerprint = req.params.fingerprint
  const user = await User.findOne({ fingerprint })
  if (user) {
    return res.standardResponse(200, 'Success', user)
  } else {
    return res.standardResponse(404, 'Error', null, 'User not found')
  }
})

usersRoute.post('/', async (req, res) => {
  const { fingerprint, os, browser } = req.body
  const ip = req.ip

  if (!fingerprint || !os || !browser) {
    return res.standardResponse(400, 'Error', null, 'Missing required fields')
  }
  const user = new User({ ...req.body, ip })

  let result 
  try {
    result = await user.save()
  } catch(error) {
    if (error.name === 'ValidationError') {
      return res.standardResponse(409, 'Error', null, error.message)
    }
    return res.standardResponse(500, 'Error', null, error.message)
  }

  return res.standardResponse(201, 'Success', result)
})

usersRoute.patch('/:fingerprint', async (req, res) => {
  const fingerprint = req.params.fingerprint

  try {
    const user = await User.findOneAndUpdate({ fingerprint }, {$inc: { accessCount: 1 }}, { new: true })
    if (!user) {
      return res.standardResponse(404, 'Error', null, 'User not found')
    }
    return res.standardResponse(200, 'Success', user)
  } catch (error) {
    return res.standardResponse(400, 'Error', null, error.message)
  }
})

usersRoute.delete('/:fingerprint', async (req, res) => {
  const fingerprint = req.params.fingerprint
  const result = await User.findOneAndDelete({ fingerprint })
  if (!result) {
    return res.standardResponse(404, 'Error', null, 'User not found')
  }

  return res.standardResponse(200, 'Success', result)
})

module.exports = usersRoute
