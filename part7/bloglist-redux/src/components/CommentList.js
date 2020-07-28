
  import React from 'react'
  import { useSelector, useDispatch } from 'react-redux'
  import PropTypes from "prop-types"
  import {
          Link
        } from "react-router-dom"
import blogs from '../services/blogs'



const CommentList = ({comments }) => {
    console.log(" list of comment: blog: ", comments)

    if (comments) {
      return (
            <section>     
              <ul className = "comments">
                  {comments.map((comment, index)=>
                  <li key={index}>{comment.comment}</li>
                  )}
              </ul>
            </section>)
    } else {
      return(
        <div></div>
      )

    }
    
    
  }

  CommentList.propTypes = {
    comments: PropTypes.array.isRequired
  }

export default CommentList

