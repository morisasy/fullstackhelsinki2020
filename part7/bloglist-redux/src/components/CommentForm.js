import React from 'react';
import PropTypes from "prop-types"


const CommentForm = ({handleComment, comment}) =>{
      

   return(
        <section className = "form-group">
                <h3>comment</h3>
             <form onSubmit={handleComment}>
                      <div className = "form-group-control">
                         <input 
                            name = 'comment'
                            id='comment'
                                   {...comment.inputProps} 
                                    required
                                    />
                        </div>                     
                      <div className = "form-group-control">
                        <button type="submit" id ="btn-comment">Add Comment</button>
                     </div>
            </form>
        </section>
    )
}

CommentForm.propTypes = {
    handleComment: PropTypes.func.isRequired,
    comment:PropTypes.object.isRequired,
 }

export default CommentForm