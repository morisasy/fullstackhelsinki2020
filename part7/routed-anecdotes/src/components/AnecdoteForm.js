import React, { useState } from 'react'

const AnecdoteForm = (props) => {
    const {handleSubmit, content, author, info, handleClear } = props

  
    return (
      <div>
        <h2>create a new anecdote</h2>
        <form onSubmit={handleSubmit}>
          <div>
              content
              <input
                  {...content}
                  name='content'
                  />
          </div>
          <div>
            author
            <input 
                {...author}
                name='author' 
                 />
          </div>
          <div>
            url for more info
            <input 
                {...info}
                name='info' 
                />
          </div>
          <button type="submit">create</button>
          <button type="button" onClick={handleClear}>reset </button>
        </form>
      </div>
    )
  
  }
export default AnecdoteForm