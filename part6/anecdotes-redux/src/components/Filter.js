import React from 'react'
import { setFilter } from '../reducers/filterReducer'

const Filter = () => {
  const handleChange = (event) => {
    const filter = event.target.value
    setFilter(filter)
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter