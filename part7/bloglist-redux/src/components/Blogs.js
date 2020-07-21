import React from 'react'
import PropTypes from "prop-types"
import BlogList from './BlogList'
const Blogs = ({blogs}) => {
console.log("blog list component: blogs: ", blogs)
const showBlogList = () => {
    const sortedList = blogs.sort((a, b) => b.likes - a.likes)
    return sortedList.map(blog => <BlogList  
                                    blog={blog}
                                     />)
  }

  return (
    <div>
            <ul>
                    {showBlogList()}
            </ul>
    </div>
     )    

}

Blogs.propTypes = {
  blogs: PropTypes.object.isRequired
}
export default Blogs