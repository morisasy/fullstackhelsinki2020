import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(state => state.notification)
  console.log( 'notification set', notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
          <div>
              {notification ?
                            <div style={style}>
                              {notification}
                            </div>
                              : null
                        }        
          </div>
  )
}

export default Notification