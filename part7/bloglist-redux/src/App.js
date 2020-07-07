import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import Button from './components/Button'
import Footer from './components/Footer'
import LoginForm from './components/LoginForm'
import AddBlogForm from './components/AddBlogForm'
import Togglable from './components/Togglable'
import Navigation from "./components/Navigation"
import Notification from './components/ErrorNotification'
import BlogList from "./components/BlogList"

import blogService from './services/blogs'
import loginService from './services/login'

import { useField } from "./hooks"
import { setNotification } from "./reducers/notificationReducer"
import { setUser, setToken } from "./reducers/loginReducer"
import { initializeUsers } from "./reducers/userReducer"
import { setNotification } from './reducers/notificationReducer'
import { initializeBlogs, 
        update, 
        createBlog,
        remove } from './reducers/blogReducer'


function App() {
  const dispatch = useDispatch()
  const blogs = useSelector( state => state.blogs)
  const users = useSelector( state => state.users)
  const user = useSelector( state => state.user)



  const getUsers = initializeUsers
  const getBlogs = initializeBlogs


  const username = useField("username")
  const password = useField("password")
  const title = useField("text")
  const author = useField("text")
  const url = useField("text")

  // create AddblogForm reference
  const addBlogFormRef = React.createRef()



  // getting blogList / initializeblog
  useEffect(() => {
    dispatch(getBlogs()) 
  },[getBlogs]) 


  //getting users / initialize users
  useEffect(() => {
    dispatch(getUsers())
  }, [getUsers])

// get user information from localStorage
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogListappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      dispatch(setUser(user))
      dispatch(setToken(user.token))
    }
  }, [])

    // find a user
    const findUser = id => users.find(user => user.id === id)
    // find a blog
    const findBlog = id => blogs.find(blog => blog.id === id)

    // find new list 
    // find all the blog except blog list with a particular id 
    const findBlogList = id => blogs.filter(blog => blog.id !== id)


  //setNotification function
  const setMessage = (message, type = "success") => {
    dispatch(setNotification({ message, type }))
    setTimeout(() => dispatch(setNotification({ message: null, type: null })), 5000)
  }

// handle login
  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username: username.inputProps.value,
        password: password.inputProps.value
      })
      console.log("user services", user)

      window.localStorage.setItem(
        'loggedBlogListappUser', JSON.stringify(user)
      ) 

      dispatch(setToken(user.token))
      dispatch(setUser(user))
      username.reset('')
      password.reset('')
      
    } catch (exception) {
      setMessage(` Wrong username or password`, 'error')
  
  
    }
   
  }



// create new blog
const handleAddBlog = async (event) => {
    event.preventDefault()
    console.log( "create blog")

    addBlogFormRef.current.toggleVisibility()

    try {
      const newBlog = {
        title: title.inputProps.value,
        author: author.inputProps.value,
        url: url.inputProps.value,
      }
      console.log("new object to add: ", JSON.stringify(newBlog))
  
      dispatch(createBlog(newBlog, user))
      //setBlogs([...blogs, blogCreated])
      dispatch(setMessage(`a new blog added: ${newBlog.title} by ${newBlog.author}`))
      
      title.reset('')
      author.reset('')
      url.reset('')
      // Notification displays only 5s
  
    } catch (error) {
     dispatch(setMessage(`Something went wrong  ${error}`, "error"))
  
  }
// handle logout 
//logout functionality
const handleLogout = (event) => {
  window.localStorage.clear()
  setUser(null)
  blogService.setToken(null)
 
}
const handleLikeUpdate = blogId =>  async event => {
  event.preventDefault();
  try {

    //use find method to get a current clicked blog
    //
    let foundBlog =  await findBlog(blogId) 
    console.log( "found blog", foundBlog)
    const newLike = foundBlog.likes + 1
    let blogToUpdate = { ...foundBlog,
                        likes: newLike,
                        user: user.id
                      }
    console.log( "updated blog", blogToUpdate)
     dispatch(update(blogToUpdate))
    console.log( "updated blog", blogUpdated)
    //setBlogs(blogs.map(blog => blog.id !== blogId ? blog: blogUpdated))
    setMessage(
       `Blog ${foundBlog.title} written by ${foundBlog.author} liked!`
       )
  } catch (error) {
    setMessage(`Something went wrong  ${error}`, 'error')
    
  }
}

const handleDelete = blogId =>  async event => {
  event.preventDefault();
   //use find method to get a current clicked blog
  let blogToDelete =  await  findBlog(blogId) 
  console.log( "found blog:", blogToDelete )
  console.log( "found blog id: ", blogToDelete.id )
  console.log( "found blog blogId: ", blogId)


  // Get a new blog list
  // exclude a blog to be deleted
  //const newBlogList =  await blogs.filter(blog => blog.id !== blogId)
  const newBlogList =  await  findBlogList(blogId)
 
  console.log( "new blog list: ", newBlogList)

  let okCancel = window.confirm(
    `Remove blog ${blogToDelete.title} by ${blogToDelete.author}?`
    )
  if (okCancel) {
    try {
 
     // const deletedBlog = await  blogService.remove(blogId)
     dispatch(remove(blogToDelete))
      console.log( "updated blog", deletedBlog)
     // setBlogs(newBlogList)
      dispatch(setMessage(
         `Blog post ${blogToDelete.title} deleted`
         ))
    
    } catch (error) {
      setMessage(`Something went wrong  ${error}`)
      
    }
  }
}
  const loginForm = () =>{
    return (
      <div className = "wrapper-box" >
                      <LoginForm
                          handleLogin={handleLogin}
                          username={username}
                          password={password}
                      />
      </div> 
    )
  }

  const display = () =>{
    if (blogs.length){

   
    return(
      <div className = "wrapper-box" >
                          <h2>Blogs</h2>
                          
                          <Notification message={setMessage}/>
                          <p>{user.name} logged in
                            <Button onClick={handleLogout} text = "Logout"/>
                          </p>
                          <Togglable buttonLabel="create" ref ={addBlogFormRef} >
                              <AddBlogForm 
                                handleAddBlog={handleAddBlog}
                                title={title}
                                author={author}
                                url={url}              
                              />
                          </Togglable>

                          <div className = "wrapper-box-container" >
                            <BlogList
                                  blogs = {blogs}
                                  handleLike = {handleLikeUpdate}
                                  handleDelete = {handleDelete}
                            />
                          </div>
                    </div>
    )
  }
  }


  return (
    <div className = "wrapper">
        <Notification message={setMessage}/>
        {user? display(): loginForm()}
               
        <Footer />
   </div>
  )
}

export default App
