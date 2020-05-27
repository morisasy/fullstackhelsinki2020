import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(state => state)
  console.log( 'notification set', notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
          <div>
              {notification.content && <div style={style}>{notification.content}</div> }        
          </div>
  )
}

export default Notification