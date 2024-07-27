require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.NODE_ENV === "test" ? 
  process.env.TEST_PORT : process.env.PORT

app.use(express.static('dist'))

const server = app.listen(port, () => {
  console.log(`Running on port ${port}`)
})

module.exports = { app, server }
