import React from 'react'
import { castVoteOf} from '../reducers/anecdoteReducer' 
import { useSelector, useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'


const AnecdoteList = () => {
 const anecdotes = useSelector(state => state.anecdote)
 const filter = useSelector(state => state.filter)
 const dispatch = useDispatch()
    

  const vote = (anecdote) => {
    console.log('vote', anecdote.id)
    
    dispatch(castVoteOf(anecdote.id))
    dispatch(setNotification(`You just voted for '${anecdote.content}'`, 10))
    console.log('You just voted for ', anecdote.content) 
  }

  const annecdotesToDisplay = () => {
    console.log("anecdotes , filter ",anecdotes,filter)
    return anecdotes
           .filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
           .sort((a, b) => b.votes - a.votes)
  }

  return(
      <div>
           { annecdotesToDisplay().map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote)}>vote</button>
                    </div>
               </div>
           )}
     </div>
  )
}

export default AnecdoteList
