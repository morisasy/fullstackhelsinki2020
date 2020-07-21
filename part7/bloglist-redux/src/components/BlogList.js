import React from 'react'
import PropTypes from "prop-types"


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
      <li  key={blog.id} >
          <Link to={`blogs/${blog.id}`}>
            {blog.title} {""} {blog.author}
          </Link>
      </li>   
  )
}


BlogList.propTypes = {
    blog: PropTypes.object.isRequired,
  }


export default BlogList