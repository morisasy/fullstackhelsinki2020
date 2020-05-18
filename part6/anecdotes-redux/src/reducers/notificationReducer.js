
const addNotification = (content) =>{
  return {
    type: 'SET_NOTIFICATION',
    data: content
  }
}
const notificationReducer = (state = null, action) => { 
  switch (action.type) {
      case 'SET_NOTIFICATION':
        return action.data
      default:
        return state
    }
  }
  
  export const setNotification = (content, timer) => {
    return dispatch =>{
      dispatch(addNotification(content))
        setTimeout(() => {
          dispatch({
            type: 'SET_NOTIFICATION',
            data: null
          })
        }, timer*1000)
   }
  }
  
  export default notificationReducer