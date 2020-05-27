const initialState= {
  isDisplay: false,
  content: ''

}

export const displayNotification = (content) =>{
  return {
    type: 'SET_NOTIFICATION',
    data: {
      isDisplay: true,
      content  
    }
  }
}


export const clearNotification = () =>{
  return displayNotification(initialState)
}


  
export const setNotification = (content) => {
  console.log('setNotification: content: ', content)
    return dispatch =>{
      dispatch(displayNotification(content))
        setTimeout(() => {
          dispatch(clearNotification())
        }, 6000)
   }
  }

  const notificationReducer = (state =initialState, action) => { 
    console.log('notificationReducer: state, action: ', state, action)
    switch (action.type) {
        case 'SET_NOTIFICATION':
          return action.data
        default:
          return state
      }
    }
  

  
  export default notificationReducer