import React, { useState } from 'react'
import { Link, Redirect } from "react-router-dom"
import PropTypes from "prop-types"
import { useSelector } from 'react-redux'
import Button from './Button'
import {Navbar, Nav} from 'react-bootstrap'
const Header = ({handleLogout}) => {

  const login = useSelector( state => state.login)
  console.log('header Login:', login)

  const [currentUser, setCurrentUser] = useState(login.username)

    const headerStyle = {
      backgroundcolor: '#343a40',
      padding: 10,
      fontStyle: 'italic',
      fontSize: 16,
      display: 'flex'
  
    }
    const padding = {
      padding: 5,
    }
    const nav = { width:'100%' }
   

    return (
      <header >
  
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto" >
                <Nav.Link href="" as="span">
                  <Link style={padding} to="/blogs">blogs</Link>
                </Nav.Link>
                <Nav.Link href="#" as="span">
                  <Link style={padding} to="/users">users</Link>
                </Nav.Link>
                <Nav.Link href="#" as="span">
                  {currentUser
                    ? <em>{currentUser} logged in</em>
                    : <Link to="/login">login</Link>
                  }
              </Nav.Link>
              </Nav>
              <Button 
                                                    style={padding} 
                                                    onClick={handleLogout} 
                                                    text = "Logout"
                                                    />
            </Navbar.Collapse>
          </Navbar>            
      </header> 
    )
  }

  Header.propTypes = {
    handleLogout: PropTypes.func.isRequired,
  }
  export default Header;