import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'

// import * as reducers from './reducers'
// const todoApp = combineReducers(reducers)

const reducer = combineReducers({
  anecdote: anecdoteReducer,
  filter: filterReducer,
  notification: notificationReducer
})

//const store = createStore(reducer, composeWithDevTools())
//const store =  createStore(reducer, applyMiddleware(thunk))

const store = createStore(reducer,  applyMiddleware(thunk))

export default store