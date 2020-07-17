const initialState= {
  content: '',
    type: ''
    }


  
  


  export const clearNotification = () =>{
    return dispatch => {
      dispatch({
        type: 'SET_NOTIFICATION',
        data: {
          type: '',
          content:'' 
        }
      })
    }
  }

  export const setNotification = ({ content, type}) => {
    return dispatch => {
      dispatch({
        type: 'SET_NOTIFICATION',
        data: {
          content,
          type
        }
      })
    }
  }
  
  const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
    case 'SET_NOTIFICATION':
      state = action.data
      return state
    default:
      return state
    }
  
  }
  
  export default notificationReducer
  