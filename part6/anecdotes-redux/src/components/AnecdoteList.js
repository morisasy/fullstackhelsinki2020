import React from 'react'
import { castVoteOf} from '../reducers/anecdoteReducer' 
import { useSelector, useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'


const AnecdoteList = (props) => {
  //const { castVoteOf, setNotification } = props;
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdote)



  const vote = (anecdote) => {
    console.log('vote', anecdote.id)
    dispatch(castVoteOf(anecdote.id))
    setNotification(`You just voted for ${anecdote.content}`, 5)
    console.log('You just voted for ', anecdote.content)
   
  }

  const filterAnecdote = (anecdotes, filter)=>{
    return anecdotes
    .filter(anecdote => anecdote.content.includes(filter))
    .sort((a, b) => b.votes - a.votes);
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
                        <button onClick={() => vote(anecdote)}>vote</button>
                    </div>
               </div>
           )}
     </div>
  )
}

export default AnecdoteList