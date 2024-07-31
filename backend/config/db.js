const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')

let mockDB = null
let isConnected = false;

const connectDB = async () => {
  if (!isConnected) {
    isConnected = true
    try {
      let dbURL = process.env.MONGODB_URL

      if (process.env.NODE_ENV === 'test') {
        mockDB = await MongoMemoryServer.create({
          binary: {
            version: '4.4.17'
          }
        })
        dbURL = mockDB.getUri()
      }

      const connection = mongoose.connect(dbURL)

      console.log(`MongoDB connected: ${(await connection).connection.host}`)
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
