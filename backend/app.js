require('module-alias/register')
require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.NODE_ENV === "test" ? 
  process.env.TEST_PORT : process.env.PORT
const { connectDB } = require('@config/db')
const User = require('@models/user')

app.use(express.static('dist'))
app.use(express.json())

connectDB()

app.get('/api/users/:fingerprint', async (req, res) => {
  const fingerprint = req.params.fingerprint
  const user = await User.findOne({ fingerprint })
  if (user) {
    return res.status(200).json(user)
  } else {
    return res.status(404).end()
  }
})

app.post('/api/users', async (req, res) => {
  const { fingerprint, os, browser } = req.body
  const ip = req.socket.remoteAddress

  if (!fingerprint || !os || !browser) {
    return res.status(400).json({ error: "Missing required fields" })
  }
  const user = new User({ ...req.body, ip })

  let result 
  try {
    result = await user.save()
  } catch(error) {
    if (error.name === 'ValidationError') {
      return res.status(409).json({error: error})
    }
    return res.status(500).json({ error: error })
  }

  return res.status(201).json(result)
})

app.patch('/api/users/:fingerprint', async (req, res) => {
  const fingerprint = req.params.fingerprint

  try {
    const user = await User.findOneAndUpdate({ fingerprint }, {$inc: { accessCount: 1 }}, { new: true })
    if (!user) {
      return res.status(404).end()
    }
    return res.status(200).json(user)
  } catch (error) {
    return res.status(400).send({ error })
  }
})

const server = app.listen(port, () => {
  console.log(`Running on port ${port}`)
})

module.exports = { app, server }
