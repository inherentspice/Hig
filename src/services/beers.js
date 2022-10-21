import axios from "axios"
const baseUrl = "/api/beers"

const getAll = () => {
  return axios.get(baseUrl)
}

const getOne = date => {
  return axios.get(`${baseUrl}/${date}`)
}
const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

export default {
  getAll,
  getOne,
  create,
  update
}
