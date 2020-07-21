import React from "react"
import {
  useRouteMatch,
  Link
} from "react-router-dom"
import { useSelector} from 'react-redux'
import PropTypes from "prop-types"


const BlogInfo = ({blogs, handleLike, handleDelete}) => {
  console.log("blog list component: blogs: ", blogs)
    return (
      <div>
        {blogs.sort((a, b) => b.likes - a.likes).map(blog =><Blog 
                                key={blog.id}  
                                blog={blog} 
                                handleLike = {handleLike(blog.id)}
                                handleDelete = {handleDelete(blog.id)}
                          />)}
      </div>
       )    
  
  }
  
  BlogList.propTypes = {
    handleLike: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
  }

export default BlogInfo