import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { useSelector, useDispatch } from 'react-redux'
import { logout } from "../reducers/loginReducer"
import Button from './Button'

const Header = ({user}) => {
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
     
    }
  
    return (
      <header style={headerStyle}>
         <Link style={padding} to="/blogs">blogs</Link>
          <Link style={padding} to="/users">users</Link>
          <span>{user} logged in
                            <Button 
                               style={padding} 
                               onClick={handleLogout} 
                               text = "Logout"
                               />
          </span>     
      </header> 
    )
  }

  Header.propTypes = {
    user: PropTypes.object.isRequired,
  }
  export default Header;