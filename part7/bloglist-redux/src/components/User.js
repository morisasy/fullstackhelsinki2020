import React from "react"
import {
  useRouteMatch
} from "react-router-dom"
import { useSelector} from 'react-redux'
import PropTypes from "prop-types"



const User = () => {


  const match= useRouteMatch('/users/:id')
  const isUser = (user) => {
    console.log( "isMatch ", match)
    return user.id === match.params.id

  }


  const user = useSelector(state => state.users.find(isUser))
  console.log( "user ", user)


    if (!user) {
      return null
    }
  
    return (
      <div>
          <h2>{user.username}</h2>
          <h4> Blogs added </h4>
          <ul>
            {user.blogs.map(blog => (
              <li key={blog.id}>
                    <span>{`${blog.title}`}</span>    
              </li>
            ))}
          </ul>
    </div>
    )
  }

/*
User.propTypes = {
  user: PropTypes.object.isRequired,
}
*/

export default User