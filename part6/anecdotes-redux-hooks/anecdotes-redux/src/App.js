import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route } from "react-router-dom"

import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import {initializeAnecdotes} from './reducers/anecdoteReducer'


const App = () => {
  //getting anecdotes
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecdotes()) 
  },[dispatch]) 
 
  return (
    <div>
        <h2>Anecdotes</h2>
        <Filter />
        <Notification />
        <AnecdoteForm />
        <AnecdoteList />
    </div>
  )
}

export default App