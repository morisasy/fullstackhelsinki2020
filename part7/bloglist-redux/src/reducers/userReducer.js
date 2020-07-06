import userService from "../services/users"


export const initializeUsers = () => {
  return async dispatch => {
    const userData = await userService.getAll()
    dispatch({
      type: "INITIALIZE_USERS",
      data: userData
    })
  }
}

const userReducer = (state = [], action) => {
  switch (action.type) {
    case "INITIALIZE_USERS":
      return action.data
    default:
      return state
  }
}

export default userReducer
