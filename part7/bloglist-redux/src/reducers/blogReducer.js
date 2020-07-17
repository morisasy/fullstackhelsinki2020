import blogService from '../services/blogs'


const blogReducer = (state = [], action) => {
    console.log('blogReducer: state, action: ', state, action)
    switch (action.type) {
    case 'INIT_BLOGS':
        return action.data
    case 'NEW_BLOG':
        return [...state, action.data]
            .sort((a, b) => b.likes - a.likes)
    case 'LIKE':
      return state
        .map(blog => blog.id !== action.data.id ? blog : action.data)
        .sort((a, b) => b.likes - a.likes)
    case 'REMOVE':
      return state
        .filter(blog => blog.id !== action.data.id)
        .sort((a, b) => b.likes - a.likes)
    default:
      return state
    }
  }


export const createBlog = (blog) => {
  console.log("create new blog reduce:", blog)
  return async dispatch => {

    let newBlog = await blogService.create(blog)
    // Adding user to a newBlog
    dispatch({
      type: 'NEW_BLOG',
      data: newBlog
    })
  }
}

export const update = blog => {
  console.log("update blog reducer:", blog)
  return async dispatch => {
    const updatedBlog = await blogService.update(blog.id, blog)
    dispatch({
      type: 'LIKE',
      data: updatedBlog
    })
  }
}

export const remove = blog => {
  return async dispatch => {
    await blogService.remove(blog.id)
    dispatch({
      type: 'REMOVE',
      data: blog
    })
  }
}

export const initializeBlogs = () => {
  return async dispatch => {
    const blogs = await blogService.getAll()
    dispatch({
      type: 'INIT_BLOGS',
      data: blogs
    })
  }
}


export default blogReducer