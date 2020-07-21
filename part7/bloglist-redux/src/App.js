import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom"
import './App.css'
import Button from './components/Button'
import Footer from './components/Footer'
import LoginForm from './components/LoginForm'
import AddBlogForm from './components/AddBlogForm'
import Togglable from './components/Togglable'
import Navigation from "./components/Navigation"
import Header from "./components/Header"
import Notification from './components/Notification'
import BlogList from "./components/BlogList"
import Users from "./components/Users"
import User from "./components/User"
import Blogs from "./components/Blogs"

import blogService from './services/blogs'
import loginService from './services/login'

import { useField } from "./hooks"
import { setNotification, clearNotification } from "./reducers/notificationReducer"
import { setUser, setToken } from "./reducers/loginReducer"
import { initializeUsers } from "./reducers/userReducer"
import { initializeBlogs, 
        update, 
        createBlog,
        remove } from './reducers/blogReducer'
import BlogInfo from "./components/BlogInfo"


function App() {
  const dispatch = useDispatch()
  const blogs = useSelector( state => state.blogs)
  const users = useSelector( state => state.users)
  //const user = useSelector( ({user}) => user? user : null)
  //const user = useSelector( ({user}) => user)

  // current login user 
  const [loginUser, setLoginUser] =  useState('')
  //console.log('users: ', users)
 // console.log('useSelector: user: ', user)
 


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
    const loggedUserJSON = window.localStorage.getItem("blogAppUser")
    console.log("Get user information from localStorage")
    if (loggedUserJSON) {
      // get user information from localStorage when user exist
      const user = JSON.parse(loggedUserJSON)
      console.log("Get user information from localStorage", user)
      dispatch(setUser(user))
      dispatch(setToken(user.token))
     // setLogin(user)
    }
  }, [loginUser])
 

    // find a user
    const findUser = id => users.find(user => user.id === id)
    // find a blog
    const findBlog = id => blogs.find(blog => blog.id === id)

    // find a blog author
    const findBlogUser = username => users.find(user => user.username = username)

    // find new list 
    // find all the blog except blog list with a particular id 
    const findBlogList = id => blogs.filter(blog => blog.id !== id)

    //parameterize route visited
    // get the id of the blog visited 
    // find the current blog
   // const matchBlogId = useRouteMatch('/blogs/:id')
    //const blogFound = matchBlogId ? findBlog(matchBlogId): null

    // get the id of the individual user  
    //const matchUsersId = useRouteMatch('/users/:id')
    //const usersFound = matchUsersId ? findUser(matchUsersId): null



  //setNotification function
  const setMessage = (content, type = "success") => {
    dispatch(setNotification({ content, type }))
    setTimeout(() => dispatch(clearNotification()), 5000)
    
  }

// handle login
  const handleLogin = async (event) => {
    event.preventDefault()
    console.log("Handle login")
    try {
      const user = await loginService.login({
        username: username.inputProps.value,
        password: password.inputProps.value
      })
      console.log("user services", user)

      window.localStorage.setItem(
        'loggedBlogListappUser', JSON.stringify(user)
      ) 
      const foundUser = findBlogUser(user.username)
      console.log("handle loging: found user", foundUser)
      // add user id
      user.id = foundUser.id
      dispatch(setToken(user.token))
      dispatch(setUser(user))
      setLoginUser(user)
      username.reset('')
      password.reset('')
      console.log("handle loging: login.username ", user)
      console.log("HANDLE LOGIN TOKEN", user.token)
     setMessage(` You have login `)
    // dispatch(setNotification(` You have login `, 'success'))
     ///setTimeout(() => dispatch(setNotification({ message: null, type: null })), 5000)
      
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
        user: loginUser.id
      }
      console.log("new object to add: ", JSON.stringify(newBlog))
      
  
      dispatch(createBlog(newBlog))
      //setBlogs([...blogs, blogCreated])
      setMessage(`a new blog added: ${newBlog.title} by ${newBlog.author}`)
      
      title.reset('')
      author.reset('')
      url.reset('')
      // Notification displays only 5s
  
    } catch (error) {
     setMessage(`Something went wrong  ${error}`, "error")
  
  }
}
/*
// handle logout 
//logout functionality
const handleLogout = (event) => {
  window.localStorage.clear()
 // dispatch(setUser(null))
  blogService.setToken(null)
  setLoginUser('')
 
}
*/
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
                        user: loginUser.id
                      }
    console.log( "updated blog", blogToUpdate)
     dispatch(update(blogToUpdate))
 
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
     /// console.log( "updated blog", deletedBlog)
     // setBlogs(newBlogList)
      dispatch(setMessage(
         `Blog post ${blogToDelete.title} deleted`, 'success'
         ))
    
    } catch (error) {
      setMessage(`Something went wrong  ${error}`, 'error')
      
    }
  }
}
  const loginForm = () =>{
    return (
      <div className = "wrapper-box" >
                      <Notification />
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
                          <Header user ={loginUser.username} />
                          <h2>Blogs App</h2>
                          
                          <Notification />
                          <Switch> 
                              <Route path="/users">
                                  <Users />
                              </Route>
                               <Route path="/users/:id">
                                   <User />
                              </Route>  
                              <Route path="/blogs/:id">
                                   <BlogInfo  />
                              </Route>                           
                              <Route path="/blogs">
                                  <Togglable buttonLabel="create" ref ={addBlogFormRef} >
                                      <AddBlogForm 
                                        handleAddBlog={handleAddBlog}
                                        title={title}
                                        author={author}
                                        url={url}              
                                      />
                                  </Togglable>
                                  <BlogList
                                    blogs = {blogs}
                                    handleLike = {handleLikeUpdate}
                                    handleDelete = {handleDelete}
                                  />
                              </Route>
                          </Switch>
                    </div>
    )
  }
  }


  return (
    <div className = "wrapper">
      <Router>
                 {loginUser.length ===0 ? loginForm(): display()}
               
               <Footer />
      </Router>
        
       
   </div>
  )
}

export default App
