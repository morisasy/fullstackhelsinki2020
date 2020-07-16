import React from 'react'
import {
  Link
} from "react-router-dom"




const  Navigation= ({user}) => {
    const padding = {
      paddingRight: 5
    }
    return (
        <div>
            <Link style={padding} to="/">blogs</Link>
            <Link style={padding} to="/">users</Link>
            {user
            ? <em>{user} logged in</em>
            : <Link style={padding} to="/login">login</Link>
          }
            <Link style={padding} to="/logout">logout</Link>
        
       </div>
    )
  }
  
  
  
  
export default Navigation 