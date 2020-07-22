import React, { useState } from 'react'
import { Link, Redirect } from "react-router-dom"
import PropTypes from "prop-types"
import { useSelector, useDispatch } from 'react-redux'
import { logout } from "../reducers/loginReducer"
import Button from './Button'

const Header = ({user}) => {
  const [currentUser, setCurrentUser] = useState(user) 
  const dispatch = useDispatch()
  const login = useSelector( state => state.login)
  console.log('header Login:', login)

    const headerStyle = {
      backgroundcolor: 'grey',
      padding: 10,
      fontStyle: 'italic',
      fontSize: 16,
      display: 'flex'
  
    }
    const padding = {
      padding: 5,
    }
    const handleLogout = async(event) => {
      dispatch(logout())
      window.localStorage.removeItem("blogAppUser")
      setCurrentUser(null)
     
    }

    // {user ? <Users /> : <Redirect to="/login" />}
  
    return (
      <header style={headerStyle}>
         <Link style={padding} to="/blogs">blogs</Link>
          <Link style={padding} to="/users">users</Link>
          {currentUser ?  <span>  
                      <em> {currentUser} logged in</em>
                                      <Button 
                                        style={padding} 
                                        onClick={handleLogout} 
                                        text = "Logout"
                                        />
                  </span>: <Redirect to="/login" />
          }
          
      </header> 
    )
  }

  Header.propTypes = {
    user: PropTypes.object.isRequired,
  }
  export default Header;