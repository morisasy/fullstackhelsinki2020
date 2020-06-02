import anecdoteService from '../services/anecdotes'


const anecdoteReducer = (state = [], action) => {
  console.log('anecdoteReducer: state, action: ', state, action)
    switch(action.type) {
      case 'INIT_ANECDOTES':
        return action.data
        
      case 'NEW_ANECDOTE':
          return [...state, action.data] 

      case 'VOTE': {
          const votedAnecdote = action.data

          return state.map(anecdote =>
            anecdote.id !== votedAnecdote.id ?  anecdote : votedAnecdote
          ).sort((a, b) => b.votes - a.votes)
         }

      default:
        return state
    }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll();
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.create(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })
  }
}


export const castVoteOf = anecdote => {
  return async dispatch => {
    const newVote = await anecdoteService.update(anecdote)
     dispatch({
       type: 'VOTE',
       data: newVote
     })
  }
 }

export default anecdoteReducer