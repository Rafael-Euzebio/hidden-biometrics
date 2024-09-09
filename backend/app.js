require('module-alias/register')
require('dotenv').config()
const express = require('express')
const app = express()
const { connectDB } = require('@config/db')
const usersRoute = require('./routes/users')
const statisticsRoute = require('./routes/statistics')
const { standardResponse } = require('@middlewares/standardResponse')
const port = process.env.PORT

app.use(express.static('dist'))
app.use(express.json())
app.use(standardResponse)
app.set('trust proxy', true)

connectDB()

app.use('/api/users', usersRoute)
app.use('/api/statistics', statisticsRoute)

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
})


const server = process.env.NODE_ENV !== "test" ? 
  app.listen(port, () => {
    console.log(`Running on port ${port}`)
  }) : app.listen()


module.exports = { app, server }
