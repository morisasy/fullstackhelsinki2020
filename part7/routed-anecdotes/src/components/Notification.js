import React from 'react'

const Notification = ({message}) =>{
  if (message === null) {
    return null
  }
  return <h5>{message}</h5>
}
  
  export default Notification