
  import React from 'react'
  import PropTypes from "prop-types"
  import {
          Link
        } from "react-router-dom"


const CommentList = ({ blog }) => {
    console.log(" list of comment: blog: ", blog)
    return(
      <div>
        <h3>comments</h3>
        <ul>
            {blog.comments.map(b =>
            <li key={b.id}>{b.comment}</li>
            )}
        </ul>
      </div>
    )
  }

  CommentList.propTypes = {
    blog: PropTypes.array.isRequired
  }

export default CommentList

