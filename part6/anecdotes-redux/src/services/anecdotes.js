import axios from 'axios'

const url = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(url)
  return response.data
}

const create = async (content) => {
  const newObject = { content, votes: 0 }
  const response = await axios.post(url, newObject)
  return response.data
}

const update = async (anecdote) => {
    const { id } = anecdote;
    const anecdoteToVote = { ...anecdote, votes: anecdote.votes + 1 }
  
    const response = await axios.put(baseUrl + '/' + id, anecdoteToVote);
    return response.data
}

export default { 
  getAll,
  create,
  update, 
}