import React from "react"
import {
  useRouteMatch
} from "react-router-dom"
import { useSelector} from 'react-redux'




const User = () => {


  const match= useRouteMatch('/users/:id')
  const isUser = (user) => {
    console.log( "isMatch ", match)
    return user.id === match.params.id

  }
 

  const user = useSelector(state => state.users.find(isUser))
  console.log( "user ", user)

    const h2Style = {
      marginBottom: 10
    }
    if (!user) {
      return null
    }
  
    return (
      <div>
          <h2 sytle ={h2Style} >{user.username}</h2>
          <h5> Blog added </h5>

          <ul className="list-group" >
            {user.blogs.map(blog => (
              <li key={blog.id} className="list-group-item" >
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