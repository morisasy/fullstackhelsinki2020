const initialState= {
    type: null,
    content: null
  
  }

  export const setNotification = ({ content, type }) => {
    return dispatch => {
      dispatch({
        type: 'SET_NOTIFICATION',
        data: { type,
          content
              }
      })
    }
  }
  
  const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
    case 'SET_NOTIFICATION':
      state = action.data
      return state.content ? state : null
    default:
      return state
    }
  
  }
  
  export default notificationReducer
  