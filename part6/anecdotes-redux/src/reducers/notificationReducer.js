export const filterChange = filter => {
    return {
      type: 'SET_FILTER',
      filter
    }
  }
  
  const notificationReducer = (state = '', action) => {
    console.log('filterReducer: state, action: ', state, action)
    switch (action.type) {
      case 'SET_FILTER':
        return action.filter
      default:
        return state
    }
  }
  
  export default notificationReducer