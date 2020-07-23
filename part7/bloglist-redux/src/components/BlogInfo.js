import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import {
  useRouteMatch,
  Link
} from "react-router-dom"
import { useSelector} from 'react-redux'
import PropTypes from "prop-types"
import Button from './Button'
import CommentForm from './CommentForm'
import CommentList from './CommentList'
import { addComment } from '../reducers/blogReducer'
import { useField } from "../hooks"


const BlogInfo = ({handleLike}) => {
  const dispatch = useDispatch()

  // get the id of the  blog
  const [userInfo, setUserInfo] = useState('')
  //const [newComment, setNewComment] = useState('')
  const comment = useField('text')
  const match= useRouteMatch('/blogs/:id')
  const isBlog = (blog) => {
    console.log( "isMatch ", match)
    return blog.id === match.params.id

  }
  //const usersFound = matchUsersId ? findUser(matchUsersId): null

  const blog = useSelector(state => state.blogs.find(isBlog))
  console.log( "blog ", blog)
  console.log("blog list component: blogs: ", blog)


  const handleComment = async (event) => {

    preventDefault()
    const newComment = comment.inputProps.value
    dispatch(addComment(blog.id, newComment))
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
                      {blog.likes} likes <Button onClick={handleLike} text = "like"/>
                   </p>
                  <p>
                    added by &nbsp;
                  <Link to={`blogs/${blog.user.id}`}>{blog.user.name}</Link>
                  </p>

              </section>
                  
              <section>
               <h4>Comments</h4>
               <CommentForm
                    handleComment = {handleComment}
                    comment = {comment}
                />
               <CommentList blog = {blog} />
                
              </section>
                  
          </div>
      </>
       )    
  
  }
  
  BlogInfo.propTypes = {
    handleLike: PropTypes.func.isRequired
  }

export default BlogInfo