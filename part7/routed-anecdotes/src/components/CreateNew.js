import React, { useState } from 'react'
import  { useField } from '../hooks'
const CreateNew = ({addNew}) => {
    
    const content = useField('text')
    const author = useField('text')
    const  info = useField('text')
   
  
  

    const handleSubmit = (e) => {

    
      e.preventDefault()
      addNew({
        content: content.inputProps.value,
        author: author.inputProps.value,
        info: info.inputProps.value,
        votes: 0
      })
     content.reset('')
     author.reset('')
     info.reset('')
    }


    const handleClear = (e) => {
      e.preventDefault()
      content.reset('')
     author.reset('')
     info.reset('')
    }
  
  
    return (
      <div>
        <h2>create a new anecdote</h2>
        <form onSubmit={handleSubmit}>
          <div>
              content
              <input
                  {...content.inputProps}
                  name='content'
                   />
          </div>
          <div>
            author
            <input 
                 {...author.inputProps}
                name='author' 
                 />
          </div>
          <div>
            url for more info
            <input 
                 {...info.inputProps}
                name='info' 
                 />
          </div>
          <button type="submit">create</button>
          <button type="button" onClick={handleClear}>reset </button>
        </form>
      </div>
    )
  
  }
export default CreateNew  