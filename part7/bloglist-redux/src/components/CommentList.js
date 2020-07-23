
  import React from 'react'
  import PropTypes from "prop-types"
  import {
          Link
        } from "react-router-dom"



const CommentList = ({ blog }) => {
    console.log(" list of comment: blog: ", blog)
    const comments = blog.comments
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

  CommentList.propTypes = {
    blog: PropTypes.array.isRequired
  }

export default CommentList

