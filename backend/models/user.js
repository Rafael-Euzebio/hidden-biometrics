const mongoose = require("mongoose")
const { Schema } = mongoose

const userSchema = new Schema({
  fingerprint: {
    type: String,
    required: true
  },
  os: {
    type: String,
    required: true
  },
  browser: {
    type: String,
    required: true
  },
  ip: {
    type: String
  },
})

const User = mongoose.model('User', userSchema)

module.exports = User
