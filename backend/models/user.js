const mongoose = require("mongoose")
const { Schema } = mongoose

const userSchema = new Schema({
  fingerprint: String,
  os: String,
  browser: String,
  ips: String,
})

const User = mongoose.model('User', userSchema)

module.exports = User
