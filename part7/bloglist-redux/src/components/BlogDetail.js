import React, { useState, useImperativeHandle } from 'react'
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import Button from './Button'
import CommentForm from './CommentForm'
import CommentList from './CommentList'



const BlogDetail = React.forwardRef(({blog, handleLike, handleDelete}, ref) => {
  
  
    const [visible, setVisible] = useState(false)

    const toggleVisibility = () => {
      setVisible(!visible)
    }

    useImperativeHandle(ref, () => {
        return {
          toggleVisibility
        }
      })
  
    const showStyle = { display: visible ? '' : 'none' }
    console.log("blog detail: ", blog)
  
    return (
      <>
          <div style={showStyle} className="blog-detail" >
                  <h3>Blog app</h3>
                  
                  <p>
                    <Link to= "/" >{blog.url}</Link>
                  </p>
                  <p>
                      {blog.likes} likes 
                      <button 
                            type="submit" 
                            class="btn btn-primary"
                            id="btn-like"
                            onClick={handleLike}
                            >
                              like
                        </button>
                    </p>
                  <p>
                    added by &nbsp; {blog.user.name}
                   
                  </p>
              
                  <button 
                            type="submit" 
                            class="btn btn-primary"
                            id="btn-remove"
                            onClick={handleDelete}
                            >
                            remove
                        </button>
          </div>
      </>
    )
  })

  BlogDetail.propTypes = {
    handleLikeChange: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    blog: PropTypes.object.isRequired
  }

export default BlogDetail