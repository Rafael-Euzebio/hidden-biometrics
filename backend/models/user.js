const mongoose = require("mongoose")
const { Schema } = mongoose

const userSchema = new Schema({
  fingerprint: {
    type: String,
    required: true,
    validate: {
      validator: async function(v) {
        const user = await User.findOne({ fingerprint: v })
        
        return !user
      },
      message: 'User already exists'
    }
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
  accessCount: {
    type: Number,
    required: true,
    default: 1
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User
