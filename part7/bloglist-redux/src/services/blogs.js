import axios from 'axios'
<<<<<<< HEAD
const baseUrl = '/api/blogs'
//const baseUrl = 'http://localhost:3003/api/blogs'

//const baseUrl = 'https://warm-mesa-44071.herokuapp.com/api/blogs'
=======
//const baseUrl = '/api/blogs'
//const baseUrl = 'http://localhost:3003/api/blogs'

const baseUrl = 'https://warm-mesa-44071.herokuapp.com/api/blogs'
>>>>>>> 2ba6b297d112c46ea255b74c031c1225bc29a41d

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = async() => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async newObject => {
  const config = {
    headers: { Authorization: token },
  }

const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const update = async (id, newObject)=> {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.put(`${baseUrl}/${id}`, newObject, config);
  return response.data;
}

const remove = async id => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.delete(`${baseUrl}/${id}`, config)
  return response.data
}

export default { getAll, create, update, remove, setToken }