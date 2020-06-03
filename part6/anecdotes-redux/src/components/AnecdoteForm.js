import React from 'react'
//import { useDispatch } from 'react-redux'
import { connect } from 'react-redux';
import { createAnecdote} from '../reducers/anecdoteReducer'
import { setNotification} from '../reducers/notificationReducer'

const AnecdoteForm = ({ createAnecdote, setNotification }) => {
   // const dispatch = useDispatch()
       
    const addAnecdote = async(event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        createAnecdote(content)
        let msgNotification = `You have added: ${content}`
        setNotification(msgNotification, 5)
        console.log(msgNotification)
        
    }

  return (
    <div>
        <h2>create new</h2>
        <form onSubmit={addAnecdote}>
            <div><input name="anecdote" /></div>
            <button>create</button>
        </form>
    </div>
  )
}


// export default AnecdoteForm



export default connect(null, {
  createAnecdote,
  setNotification
})(AnecdoteForm);

