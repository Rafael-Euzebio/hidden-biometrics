const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')
require('dotenv').config()

let mockDB = null
let isConnected = false;

const connectDB = async () => {
  if (!isConnected) {
    isConnected = true
    try {
      let dbURL = process.env.MONGODB_URL

      if (process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'dev') {
        mockDB = await MongoMemoryServer.create({
          binary: {
            version: '4.4.17'
          }
        })
        dbURL = mockDB.getUri()
      }

      const connection = await mongoose.connect(dbURL)

      if (process.env.NODE_ENV !== 'test') {
        console.log(`MongoDB connected: ${(connection).connection.host}`)
      }
    } catch(error) {
      console.error(error)
    }
  }
}

const disconnectDB = async () => {
  isConnected = false
  try {
    await mongoose.connection.close()
    if (mockDB) {
      await mockDB.stop()
    }
  } catch(error) {
    console.error(error)
  }
}

module.exports = { connectDB, disconnectDB}
