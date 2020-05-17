import React from 'react'
import { castVoteOf} from '../reducers/anecdoteReducer' 
import { useSelector, useDispatch } from 'react-redux'


const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdote)


  const vote = (id) => {
    console.log('vote', id)
    dispatch(castVoteOf(id))
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
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
               </div>
           )}
     </div>
  )
}

export default AnecdoteList