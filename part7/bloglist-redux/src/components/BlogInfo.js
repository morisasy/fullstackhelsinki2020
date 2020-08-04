import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import {
  useRouteMatch,
  Link,
  Redirect,
   Route
} from "react-router-dom"
import PropTypes from "prop-types"
import Button from './Button'
import CommentForm from './CommentForm'
import CommentList from './CommentList'
import { addComment } from '../reducers/blogReducer'
import { useField } from "../hooks"


const BlogInfo = ({handleLike, handleDelete}) => {
  const dispatch = useDispatch()


  const comment = useField('text')
  const match= useRouteMatch('/blogs/:id')
  const isBlog = (blog) => {
   // console.log( "isMatch ", match)
    return blog.id === match.params.id

  }
  //const usersFound = matchUsersId ? findUser(matchUsersId): null

  const blog = useSelector(state => state.blogs.find(isBlog))
  console.log( "blog ", blog)
 //const blogComment = blog.comments? blog.comments : null
 // console.log("blog list component: blogs: ", blogComment)
 if (!blog) {
  return (
    <div>
        <Route>
          <Redirect to="/blogs" />
        </Route>
     </div>
  )
}


  const handleComment = async (e) => {
    e.preventDefault()
    const newComment = comment.inputProps.value
    const id = blog.id
    console.log( 'comment id: blog.is', id)
    dispatch(addComment(id, newComment))
   // setComment('')
    comment.reset('')
  }
    return (
      <>
          <div  className="blogInfo" >
              <section>
                 <h3>
                    {blog.title} {" "} {blog.author}
                  </h3>
                  
                  <p>
                    <a href={blog.url}>{blog.url}</a>
                  </p>
                  <p>
                      {blog.likes} likes <Button onClick={handleLike(match.params.id)} text = "like"/>
                  </p>
                  <p>
                     <Button onClick={handleDelete(match.params.id)} text = "delete"/>
                  </p>
                  
                  <p>
                    added by &nbsp;
                  <Link to={`blogs/${blog.user.id}`}>{blog.user.name}</Link>
                  </p>

              </section>
                  
              <section>
          
               <CommentForm
                    handleComment = {handleComment}
                    comment = {comment}
                />
                {(blog.comments && <CommentList 
                               comments = {blog.comments} 
                               />
                            )} 
              </section>
                  
          </div>
      </>
       )    
  
  }
  
  BlogInfo.propTypes = {
    handleLike: PropTypes.func.isRequired
  }

export default BlogInfo