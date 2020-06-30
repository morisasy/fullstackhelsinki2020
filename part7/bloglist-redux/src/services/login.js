import axios from 'axios'
<<<<<<< HEAD
const baseUrl = '/api/login'
//const baseUrl = 'http://localhost:3003/api/login'
//https://warm-mesa-44071.herokuapp.com/api/users

//const baseUrl = 'https://warm-mesa-44071.herokuapp.com/api/users'
=======
//const baseUrl = '/api/login'
//const baseUrl = 'http://localhost:3003/api/login'
//https://warm-mesa-44071.herokuapp.com/api/users

const baseUrl = 'https://warm-mesa-44071.herokuapp.com/api/users'
>>>>>>> 2ba6b297d112c46ea255b74c031c1225bc29a41d

const login = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

export default { login }