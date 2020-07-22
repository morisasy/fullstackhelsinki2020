
import React from 'react';
import PropTypes from "prop-types"
import Notification from './Notification'

const LoginForm = ({ handleLogin, username, password}) => {


  return ( 
    <div className ="form-login">
        <h2>Log in to application</h2> 
        <Notification />
        <form onSubmit={handleLogin}>
                <div className ="form-group-control">
                    username: 
                        <input
                         {...username.inputProps}
                         name = "name"
                        />
                </div>
                <div className ="form-group-control">
                    password: 
                        <input
                         {...password.inputProps}
                         name ="password"
                      />
                </div>
                <button type="submit" >login</button>
        </form>
    </div>
  )
}
LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  username:PropTypes.object.isRequired,
  password: PropTypes.object.isRequired
}
export default LoginForm
