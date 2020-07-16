import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import notificationReducer from './reducers/notificationReducer'
import userReducer from './reducers/userReducer'
import blogReducer from './reducers/blogReducer'
import loginReducer from './reducers/loginReducer'

const reducer = combineReducers({
  blogs: blogReducer,
  notification: notificationReducer,
  login: loginReducer,
  users: userReducer
})
// const store = createStore(reducer, applyMiddleware(thunk))

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store