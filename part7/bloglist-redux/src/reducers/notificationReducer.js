const initialState= {

    type: '',
    isDisplay: false,
    content: ''
  
  }

  
  
  export const displayNotification = (content, styleType) =>({
      type: 'SET_NOTIFICATION',
      data: {
        type: styleType,
        isDisplay: true,
        content  
      }
  })
  
  
  export const clearNotification = () =>({
    type: 'SET_NOTIFICATION',
      data: {
        type: '',
        isDisplay: false,
        content :'' 
      }
  })

  export const setNotification = ({ content, sytleType }) => {
    return dispatch => {
      dispatch({
        type: 'SET_NOTIFICATION',
        data: { type: sytleType,
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
  