import React, { useState } from 'react'


const Anecdote = ({ anecdote }) => {
  /*
  console.log( "anacdote: /anecdotes/:id", anecdote)
  //const [matchID, setMatchID] = useState('')
  //const id = useParams().id
  //const anecdote = anecdotes.find(n => n.id === Number(id))
  const match = useRouteMatch('/anecdotes/:id')
  //const matchID = anecdotes.map(anecdote => anecdote.id)
  console.log( "match:", match)
  //setMatchID(match.params.id)
  const anecdote = match ? anecdotes.find(anecdote => anecdote.id === Number(match.params.id)): null
  console.log( "match: /anecdotes/:id", match.params.id)
  const anecdoteMatch = anecdotes.find(anecdote => anecdote.id === Number(match.params.id))
  console.log( "anacdote:  anecdoteMatch", anecdoteMatch)
  */
    return (
      <>
        <h2>{anecdote.content}</h2>
        <p>has {anecdote.votes} votes</p>
      </>
    )
  }

  export default Anecdote

