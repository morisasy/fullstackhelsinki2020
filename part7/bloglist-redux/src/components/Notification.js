import React from 'react'
import { useSelector } from 'react-redux'


const Notification = () => {
  const notification = useSelector(state => state.notification)
  console.log('notification: ', notification)

  if (notification.content) {
    console.log('notification: type, content ', notification)

    
    return(
        <div className={notification.type}>
          {notification.content}
        </div>
      )
    
    }


  return (
    <div >
    </div>
  )
}
/*
Notification.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string
}
*/

export default Notification