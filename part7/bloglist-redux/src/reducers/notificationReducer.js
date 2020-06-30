const initialState= {
    type: null,
    message: null
  
  }

  export const setNotification = ({ message, type }) => {
    return dispatch => {
      dispatch({
        type: 'SET_NOTIFICATION',
        data: { message,
                type 
              },
      })
    }
  }
  
  const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
    case 'SET_NOTIFICATION':
      return state.data
    default:
      return state
    }
  
  }
  
  export default notificationReducer
  