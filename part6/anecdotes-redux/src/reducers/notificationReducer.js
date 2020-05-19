

const displayNotification = (content) =>{
  return {
    type: 'SET_NOTIFICATION',
    data: content
  }
}

const clearNotification = () =>{
  return {
    type: 'SET_NOTIFICATION',
    data: null
  }
}

const notificationReducer = (state = '', action) => { 
  switch (action.type) {
      case 'SET_NOTIFICATION':
        return action.data
      default:
        return state
    }
  }
  
  export const setNotification = (content, timer) => {
    return dispatch =>{
      dispatch(displayNotification(content))
        setTimeout(() => {
          dispatch(clearNotification())
        }, timer*1000)
   }
  }
  
  export default notificationReducer