const initialNotification = {
  content: '',
  isDisplay: false
}

const notificationReducer = (state =[], action) => { 
  switch (action.type) {
      case 'SET_NOTIFICATION':
        return state.concat(action.data)
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

const displayNotification = (content) =>{
  return {
    type: 'SET_NOTIFICATION',
    data: {
      content,
      isDisplay: true
    }
  }
}

const clearNotification = () =>{
  return {
    type: 'SET_NOTIFICATION',
    data:{
      content: '',
      isDisplay: false
    }
  }
}



  
  export default notificationReducer