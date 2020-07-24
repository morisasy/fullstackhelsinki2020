import blogService from '../services/blogs'

// Reducer
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
  
    case 'ADD_COMMENT':
      console.log('action.date', action.data)
      const Id = action.data.id
      const comment = action.data.comment
      console.log('commentID: ', Id)
      console.log('comment: ', comment)

      const blogToComment = state.find(blog => blog.id === Id)
      console.log('BlogToComment: ', blogToComment)
      const changedComments = blogToComment.comments
      changedComments.push(comment)
      const commentedBlog = {
        ...blogToComment,
        comments: changedComments
      }
      const updatedComment = blogToComment.comments.concat(comment)
      const commentToAdd = {
         ...blogToComment, 
         comments: updatedComment
        }
       console.log('commentedBlog: ',commentedBlog)
      console.log('BlogToAdd: ', commentToAdd)
      return commentToAdd
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


export const addComment = (id, comment) => {

  console.log( 'add comment id:' ,id)
  console.log( 'add comment comment:' , comment)
  return async dispatch => {
   let newBlog = await blogService.addComment(id, { comment })
   console.log( 'new Blog:' , newBlog)
    dispatch({
      type: 'Add_COMMENT',
      data: newBlog
    })
  }
}



export default blogReducer