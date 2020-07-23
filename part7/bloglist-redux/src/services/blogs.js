import axios from 'axios'
const baseUrl = '/api/blogs'
//const baseUrl = 'http://localhost:3003/api/blogs'

//const baseUrl = 'https://warm-mesa-44071.herokuapp.com/api/blogs'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}


const destroyToken = () => {
  token = null
}

const getConfig = () => ({
  headers: { Authorization: token }
})
const getAll = async() => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async newObject => {
 
const response = await axios.post(baseUrl, newObject,  getConfig())
  return response.data
}

const update = async (id, newObject)=> {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.put(
          `${baseUrl}/${id}`,
          newObject,
            config);
  return response.data;
}

const remove = async id => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.delete(`${baseUrl}/${id}`, config)
  return response.data
}


const addComment = async (id, comment) => {
  const config = {
    headers: { Authorization: token }
  }
  const response = await axios.post(
    `${baseUrl}/${id}/comments`,
    comment,
    config
  )
  return response.data
}

export default { 
  getAll,
   create,
    update,
     remove,
     setToken,
      destroyToken,
       addComment
      }