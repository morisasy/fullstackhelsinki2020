import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const BlogView = ({ blog }) => {
  
  return (
      <div>
          <Link to={`blogs/${blog.id}`}>
            {blog.title} ({blog.author})
          </Link>
      </div>   
  )
}


BlogView.propTypes = {
    blog: PropTypes.object.isRequired,
  }

export default BlogView