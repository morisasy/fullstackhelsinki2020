import blogService from "../services/blogs"



const initialState = {
  username: "",
  name: "",
  id: ""
}

export const setUser = user => {
    console.log ('setUser: ', user)
  return {
    type:  "SET_USER",
    data: user
  }
}

export const setToken = token => {
  return async dispatch => {
    await blogService.setToken(token)
    dispatch({
      type: "SET_TOKEN"
    })
  }
}


export const logout = () => {
  return async dispatch => {
    window.localStorage.clear()
    dispatch({
      type:  "LOGOUT"
    })
  }
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case  "SET_USER":
      return {
        ...state,
        username: action.data.username,
        name: action.data.name,
        id: action.data.id,
        token: action.data.token
      }
    case "SET_TOKEN":
      return state
    case "LOGOUT":
      return initialState
    default:
      return state
  }
}

export default loginReducer