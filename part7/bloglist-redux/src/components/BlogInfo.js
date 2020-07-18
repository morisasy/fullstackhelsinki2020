import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const BlogInfo = ({ blog }) => {
  
  return (
      <div>
          <h2>blog</h2>
          <Link to={`blogs/${blog.id}`}>
            {blog.title} ({blog.author})
          </Link>
      </div>   
  )
}


BlogView.propTypes = {
    blog: PropTypes.object.isRequired,
  }

export default BlogInfo