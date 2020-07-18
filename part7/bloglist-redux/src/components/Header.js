import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { useSelector, useDispatch } from 'react-redux'
import { logout } from "./reducers/loginReducer"
import Button from './components/Button'

const Header = ({user}) => {
  const dispatch = useDispatch()
  const login = useSelector( state => state.login)
  console.log('header Login:', login)
    const headerStyle = {
      border: 'solid',
      borderWidth: 5,
      padding: 10,
      fontStyle: 'italic',
      fontSize: 16,
  
    }
    const padding = {
      padding: 5,
    }
    const handleLogout = async(event) => {
      dispatch(logout())
     
    }
  
    return (
      <header style={headerStyle}>
         <Link style={padding} to="/">blogs</Link>
          <Link style={padding} to="/">users</Link>
          <p>{user} logged in
                            <Button style={padding} onClick={handleLogout} text = "Logout"/>
          </p>     
      </header> 
    )
  }

  Header.propTypes = {
    user: PropTypes.object.isRequired,
  }
  export default Header;