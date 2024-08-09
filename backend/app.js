require('module-alias/register')
require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.NODE_ENV === "test" ? 
  process.env.TEST_PORT : process.env.PORT
const { connectDB } = require('@config/db')
const User = require('@models/user')
const { standardResponse } = require('@middlewares/standardResponse')

app.use(express.static('dist'))
app.use(express.json())
app.use(standardResponse)

connectDB()

app.get('/api/users', async (req, res) => {
  let users 
  try {
    users = await User.find({})
  } catch(error) {
    return res.standardResponse(500, 'Error', null, error.message)
  }
    return res.standardResponse(200, 'Success', users)
})

app.get('/api/users/:fingerprint', async (req, res) => {
  const fingerprint = req.params.fingerprint
  const user = await User.findOne({ fingerprint })
  if (user) {
    return res.standardResponse(200, 'Success', user)
  } else {
    return res.standardResponse(404, 'Error', null, 'User not found')
  }
})

app.post('/api/users', async (req, res) => {
  const { fingerprint, os, browser } = req.body
  const ip = req.socket.remoteAddress

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

app.patch('/api/users/:fingerprint', async (req, res) => {
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

app.delete('/api/users/:fingerprint', async (req, res) => {
  const fingerprint = req.params.fingerprint
  const result = await User.findOneAndDelete({ fingerprint })
  if (!result) {
    return res.standardResponse(404, 'Error', null, 'User not found')
  }

  return res.standardResponse(200, 'Success', result)
})

const server = app.listen(port, () => {
  console.log(`Running on port ${port}`)
})

module.exports = { app, server }
