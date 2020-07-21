import React, { useState } from "react"
import {
  useRouteMatch,
  Link
} from "react-router-dom"
import { useSelector} from 'react-redux'
import PropTypes from "prop-types"



const User = () => {

  // get the id of the individual user  
  const [userInfo, setUserInfo] = useState('')
  const match= useRouteMatch('/users/:id')
  const isUser = (user) => {
    console.log( "isMatch ", match)
    return user.id === match.params.id

  }
  //const usersFound = matchUsersId ? findUser(matchUsersId): null

  const user = useSelector(({users}) => users.find(isUser))
  console.log( "user ", user)


    if (!user) {
      return null
    }
  
    return (
      <div>
          <h2>Username: {user.username}</h2>
          <p>Full name: {user.name}</p>
          <h4> Blogs added by {user.username}</h4>
          <ul>
            {user.blogs.map(blog => (
              <li key={blog.id}>
                  <Link to={`/blogs/${blog.id}`}>
                    <span>{`${user.username}`}</span>
                  </Link>
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