import React, { useState, useImperativeHandle } from 'react'


const Togglable = React.forwardRef((props, ref) => {
    const [visible, setVisible] = useState(false)

    const hideWhenVisible = { display: visible ? 'none' : '' }
    const showWhenVisible = { display: visible ? '' : 'none' }
  
    const toggleVisibility = () => {
      setVisible(!visible)
    }

    useImperativeHandle(ref, () => {
        return {
          toggleVisibility
        }
      })
  
    return (
      <div>
        <div style={hideWhenVisible}>
          <button onClick={toggleVisibility} id ="btn-add-blog">Add Blog</button>
        </div>
        <div style={showWhenVisible} className="togglableContent" >
          {props.children}
          <button onClick={toggleVisibility} id ="btn-cancel">Cancel</button>
        </div>
      </div>
    )
  })
  
  export default Togglable