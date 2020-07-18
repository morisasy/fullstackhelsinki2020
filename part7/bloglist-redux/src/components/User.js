import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const User = ({user}) => {


    if (!user) {
      return null
    }
  
    return (
      <div>
        <h3>
          {user.name}{" "}
        </h3>
      <h4> 
     added blogs:{" "}
      </h4>
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


User.propTypes = {
  user: PropTypes.object.isRequired,
}

export default User