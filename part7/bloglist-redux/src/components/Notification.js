import React from 'react'
import { useSelector } from 'react-redux'


const Notification = () => {
  const notification = useSelector(state => state.notification)
  console.log('notification: ', notification)
  //const {message, type} = notification

  if (notification.content) {
    console.log('notification: type, content ', notification)

    
    return(
        <div className={notification.type}>
          {notification.content}
        </div>
      )
    
    }

  //let styleType = null
 // notification.type === "success" ? styleType = "success" : styleType = "error"

 // <div className={styleType}>


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