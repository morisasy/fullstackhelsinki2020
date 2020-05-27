import React from 'react'
import { castVoteOf} from '../reducers/anecdoteReducer' 
import { useSelector, useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'


const AnecdoteList = (props) => {
  //const { castVoteOf, setNotification } = props;
  const dispatch = useDispatch()
  //const anecdotes = useSelector(state => state.anecdote)
  const anecdotesData = useSelector(state => state)
  const anecdotes = anecdotesData.anecdote
  console.log('anacdotesData ', anecdotesData)
 



  const vote = (anecdote) => {
    console.log('vote', anecdote.id)
    dispatch(castVoteOf(anecdote.id))
    setNotification(`You just voted for ${anecdote.content}`, 5)
    console.log('You just voted for ', anecdote.content)
   
  }

  const filterAnecdote = (anecdotes, filter)=>{
    if (filter === ''){
      let anecdotesFound = anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))

      return  anecdotesFound.sort((a, b) => b.votes - a.votes)
    }
    return anecdotes
   
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