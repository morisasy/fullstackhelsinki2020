import React from 'react'
import { castVoteOf} from '../reducers/anecdoteReducer' 
//import { useSelector, useDispatch } from 'react-redux'
import { connect } from 'react-redux';
import { setNotification } from '../reducers/notificationReducer'


const AnecdoteList = ({ displayAnecdotes, castVoteOf, setNotification }) => {
 
  const vote = (anecdote) => {
    console.log('vote', anecdote.id)
    castVoteOf(anecdote.id)
    setNotification(`You just voted for '${anecdote.content}'`, 10)
    console.log('You just voted for ', anecdote.content)
   
  }

  return(
      <div>
           { displayAnecdotes.map(anecdote =>
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


const annecdotesToDisplay = (state) => {
  console.log("anecdotes, filter", state.anecdote, state.filter)
  return state.anecdote
         .filter(anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase()))
         .sort((a, b) => b.votes - a.votes)
}

const mapStateToProps = state => {
  console.log("mapStateToProps's State", state)
  return {
    displayAnecdotes: annecdotesToDisplay(state)
    
  }
}

const mapDispatchToProps = {
    castVoteOf,
    setNotification 
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
