import React, { useState, useImperativeHandle } from 'react'
import PropTypes from "prop-types"
import Button from './Button'


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
                  
                  <p>
                    <a href={blog.url}>{blog.url}</a>
                  </p>
                  <p>
                      {blog.likes} likes <Button onClick={handleLike} text = "like"/>
                    </p>
                  <p>
                    added by &nbsp;
                   <Link to={`/users/${blog.user.id}`}>{blog.user.name}</Link>
                  </p>
                  <Button onClick={handleDelete} text = "remove"/>
          </div>
      </>
    )
  })

  BlogDetail.propTypes = {
    handleLikeChange: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
  }

export default BlogDetail