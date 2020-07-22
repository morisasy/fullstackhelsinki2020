import React from 'react'
import PropTypes from "prop-types"
import {
  useRouteMatch,
  Link
} from "react-router-dom"


const BlogList = ({blog}) => {
 

  return (
      <tr  key={blog.id} >
          <td>
              <Link to={`blogs/${blog.id}`}>
                {blog.title} {""} {blog.author}
              </Link>
          </td>        
      </tr>   
  )
}


BlogList.propTypes = {
    blog: PropTypes.object.isRequired,
  }


export default BlogList