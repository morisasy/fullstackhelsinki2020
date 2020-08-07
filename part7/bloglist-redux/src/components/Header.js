import React from 'react'
import { Link, Redirect } from "react-router-dom"
import PropTypes from "prop-types"
import Button from './Button'
import {Navbar, Nav} from 'react-bootstrap'
const Header = ({handleLogout, loginUser}) => {

  //const login = useSelector( state => state.login)
  console.log('header Login: LoginUser', loginUser)

    const emStyle = {color: 'white'}
    const padding = {
      padding: 5,
    }
   

    return (
      <header>
  
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
                  {loginUser
                    ? <em style ={emStyle}>{loginUser} logged in</em>
                    : <Redirect to="/login" />
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