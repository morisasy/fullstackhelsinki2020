const initialNotification = {
  content: ''
}

export const displayNotification = (content) =>{
  return {
    type: 'SET_NOTIFICATION',
    data: {
      content
    }
  }
}


export const clearNotification = () =>{
  return displayNotification(initialNotification)
}


  
export const setNotification = (content) => {
  console.log('setNotification: content: ', content)
    return dispatch =>{
      dispatch(displayNotification(content))
        setTimeout(() => {
          dispatch(clearNotification())
        }, 5000)
   }
  }

  const notificationReducer = (state =initialNotification, action) => { 
    console.log('notificationReducer: state, action: ', state, action)
    switch (action.type) {
        case 'SET_NOTIFICATION':
          return action.data
        default:
          return state
      }
    }
  

  
  export default notificationReducer