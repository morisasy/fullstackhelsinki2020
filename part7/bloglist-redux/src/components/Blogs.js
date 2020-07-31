import React from 'react'
import PropTypes from "prop-types"
import {
        Link
      } from "react-router-dom"
import { Table } from 'react-bootstrap'

const Blogs = ({blogs}) => {
console.log("blog list component: blogs: ", blogs)
const padding = {
        paddingTop: 15
      }

const showBlogList = () => {
    const sortedList = blogs.sort((a, b) => b.likes - a.likes)
    return sortedList.map(blog => <tr  key={blog.id} >
                                        <td>
                                        <Link to={`blogs/${blog.id}`}>
                                        {blog.title} {""} {blog.author}
                                        </Link>
                                        </td> 
                                </tr>  )
  }

  return (
    <div style= {padding}>
            <Table striped>
                    <tbody>
                                {showBlogList()}
                    </tbody>
                    
            </Table>
    </div>
     )    

}

Blogs.propTypes = {
  blogs: PropTypes.array.isRequired
}
export default Blogs