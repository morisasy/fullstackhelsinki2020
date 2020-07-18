import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { useSelector} from 'react-redux'
import {
  useRouteMatch
} from "react-router-dom"

const User = () => {

  // get the id of the individual user  
  const id= useRouteMatch('/users/:id')
  //const usersFound = matchUsersId ? findUser(matchUsersId): null

  const user = useSelector(({users}) => users.find(user => user.id === id))


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
                    <span>{blog.title}</span>
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