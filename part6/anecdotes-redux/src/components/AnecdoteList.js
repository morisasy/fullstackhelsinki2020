import React from 'react'
import { castVoteOf} from '../reducers/anecdoteReducer' 
import { useSelector, useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'


const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdote)



  const vote = (id, content) => {
    console.log('vote', id)
    dispatch(castVoteOf(id))
    setNotification(`You just voted for ${content}`, 5)
   
  }

  return(
      <div>
           {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
                    </div>
               </div>
           )}
     </div>
  )
}

export default AnecdoteList