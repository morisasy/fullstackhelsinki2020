import React from 'react'
import PropTypes from "prop-types"

const Notification = ({ message, type }) => {

  if (message === null || type ===null) {
    
    return(
        <div> </div>
      )
    
    }

  let styleType = null
  type === "success" ? styleType = "success" : styleType = "error"


  return (
    <div className={styleType}>
      {message}
    </div>
  )
}

Notification.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string
}

  export default Notification