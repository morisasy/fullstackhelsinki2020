import React, { useState } from 'react'
import { Link, Redirect } from "react-router-dom"
import PropTypes from "prop-types"
import { useSelector } from 'react-redux'
import Button from './Button'

const Header = ({handleLogout}) => {

  const login = useSelector( state => state.login)
  console.log('header Login:', login)

  const [currentUser, setCurrentUser] = useState(login.username)

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
   

    return (
      <header style={headerStyle}>
            <nav>
                    <Link style={padding} to="/blogs">blogs</Link>
                    <Link style={padding} to="/users">users</Link>
                    <em> {currentUser} logged in</em>
                                                  <Button 
                                                    style={padding} 
                                                    onClick={handleLogout} 
                                                    text = "Logout"
                                                    />

            </nav>            
      </header> 
    )
  }

  Header.propTypes = {
    handleLogout: PropTypes.func.isRequired,
  }
  export default Header;