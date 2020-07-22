import React, { useState } from "react"
import {
  useRouteMatch,
  Link
} from "react-router-dom"
import { useSelector} from 'react-redux'
import PropTypes from "prop-types"
import Button from './Button'


const BlogInfo = ({handleLike}) => {

  // get the id of the  blog
  const [userInfo, setUserInfo] = useState('')
  const match= useRouteMatch('/blogs/:id')
  const isBlog = (blog) => {
    console.log( "isMatch ", match)
    return blog.id === match.params.id

  }
  //const usersFound = matchUsersId ? findUser(matchUsersId): null

  const blog = useSelector(state => state.blogs.find(isBlog))
  console.log( "blog ", blog)
  console.log("blog list component: blogs: ", blog)
    return (
      <>
          <div  className="blogInfo" >
                  <p>
                    {blog.title} {""} {blog.author}
                  </p>
                  
                  <p>
                    <a href={blog.url}>{blog.url}</a>
                  </p>
                  <p>
                      {blog.likes} likes <Button onClick={handleLike} text = "like"/>
                   </p>
                  <p>
                    added by &nbsp;
                  <Link to={`blogs/${blog.user.id}`}>{blog.user.name}</Link>
                  </p>
          </div>
      </>
       )    
  
  }
  
  BlogInfo.propTypes = {
    handleLike: PropTypes.func.isRequired
  }

export default BlogInfo