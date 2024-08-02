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
    return res.status(200).json(user).end()
  } else {
    return res.status(404).end()
  }
})

const server = app.listen(port, () => {
  console.log(`Running on port ${port}`)
})

module.exports = { app, server }