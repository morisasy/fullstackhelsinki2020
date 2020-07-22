import React from 'react'
import PropTypes from "prop-types"
import {
  useRouteMatch,
  Link
} from "react-router-dom"


const BlogList = ({blog}) => {
  /*

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
    // get the id of the visited blog  
    const match = useRouteMatch('/blogs/:id') 
    const isBlog = blog => {
      console.log( "isMatch ", match)
      return blog.id === match.params.id
  
    }
    const blog = useSelector(({blogs}) => blogs.find(isBlog))
    console.log( 'BlogInfo: blog', blog)
  */

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