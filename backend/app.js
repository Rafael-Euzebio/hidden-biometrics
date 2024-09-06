require('module-alias/register')
require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.NODE_ENV === "test" ? 
  process.env.TEST_PORT : process.env.PORT
const { connectDB } = require('@config/db')
const usersRoute = require('./routes/users')
const { standardResponse } = require('@middlewares/standardResponse')

app.use(express.static('dist'))
app.use(express.json())
app.use(standardResponse)
app.set('trust proxy', true)

connectDB()

app.use('/api/users', usersRoute)

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
})


const server = app.listen(port, () => {
  console.log(`Running on port ${port}`)
})

module.exports = { app, server }
