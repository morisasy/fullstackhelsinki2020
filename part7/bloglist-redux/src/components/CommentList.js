
  import React from 'react'
  import PropTypes from "prop-types"



const CommentList = ({comments }) => {
    console.log(" list of comment: blog: ", comments)

    if (comments) {
      return (
            <section>     
              <ul className ="list-group">
                  {comments.map((comment, index)=>
                  <li key={index} className="list-group-item" >{comment.comment}</li>
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

