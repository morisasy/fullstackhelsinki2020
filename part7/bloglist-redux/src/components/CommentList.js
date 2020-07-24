
  import React from 'react'
  import { useSelector, useDispatch } from 'react-redux'
  import PropTypes from "prop-types"
  import {
          Link
        } from "react-router-dom"




const CommentList = ({ blogId }) => {
    console.log(" list of comment: blog: ", blogId)

  //const blog = useSelector(state => state.blogs.filter(blog.blog ===blogId))
  const blogComments = useSelector(state => state.blogs)
  console.log(" list of comment: blogs: ", blogComments)
  //const blogs  = blogComments.filter(comm.id === blogId)
    const comments = blogComments
    return <diV></diV>
    /*
    if (comments.length === null) {
      return <div></div>
    } else {
      return(
        <section>
          <h3>comments</h3>
          <ul>
              {comments.map(comment =>
              <li key={comment.id}>{comment.comment}</li>
              )}
          </ul>
        </section>
      )

    }
    */
    
  }

  CommentList.propTypes = {
    blogId: PropTypes.string.isRequired
  }

export default CommentList

