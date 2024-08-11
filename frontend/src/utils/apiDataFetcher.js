import axios from 'axios'
const baseUrl = '/api/users/'

const requests = {
  getAll: async function () {
    const response = await axios.get(baseUrl)
    return response.data
  },
  getOne: async function (fingerprint) {
    const response = await axios.get(`${baseUrl}${fingerprint}`)
    return response.data
  },
  insertOne: async function (fingerprint, browser, os) {
    const response = await axios.post(baseUrl, { fingerprint, browser, os })
    return response.data
  },
  updateOne: async function (fingerprint) {
    const response = await axios.patch(`${baseUrl}${fingerprint}`)
    return response.data
  },
  deleteOne: async function (fingerprint) {
    const response = await axios.delete(`${baseUrl}${fingerprint}`)
    return response.data
  }
}

export default requests
