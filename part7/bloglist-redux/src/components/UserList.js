
import React from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'

const UserList = () => {
    const users = useSelector(state => state.users)
    if (!user) {
      return null
    }
  
    return (
      <div>
        // ...
      </div>
    )
  }

  export default UserList