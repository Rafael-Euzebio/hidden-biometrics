import axios from 'axios'
const baseUrl = '/api'

const requests = {
  users: {
    getAll: async function () {
      const response = await axios.get(`${baseUrl}/users`)
      return response.data
    },
    getOne: async function (fingerprint) {
      const response = await axios.get(`${baseUrl}/users/${fingerprint}`)
      return response.data
    },
    insertOne: async function (fingerprint, browser, os, deviceType) {
      const response = await axios.post(`${baseUrl}/users`, { fingerprint, browser, os, deviceType })
      return response.data
    },
    updateOne: async function (fingerprint) {
      const response = await axios.patch(`${baseUrl}/users/${fingerprint}`)
      return response.data
    },
    deleteOne: async function (fingerprint) {
      const response = await axios.delete(`${baseUrl}/users/${fingerprint}`)
      return response.data
    }
  },
  statistics: {
    getAll: async function () {
      const response = await axios.get(`${baseUrl}/statistics`)
      return response.data
    }
  }
}

export default requests
