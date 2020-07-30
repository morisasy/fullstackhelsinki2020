
import React from 'react';
import PropTypes from "prop-types"
import Notification from './Notification'
import { Table, Form, Button } from 'react-bootstrap'

const LoginForm = ({ handleLogin, username, password}) => {


  return ( 
        <div className ="form-login">
                <h2>login</h2>
                <Notification />
                <form onSubmit={handleLogin}>
                        <div class="form-group row">
                          <label for="username" class="col-sm-2 col-form-label">username</label>
                          <div class="col-sm-10">
                            <input 
                                 {...username.inputProps}
                                type="text" 
                                class="form-control"
                                id=" username" 
                                />
                          </div>
                        </div>
                        <div class="form-group row">
                          <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                          <div class="col-sm-10">
                            <input type="password"
                               {...password.inputProps} 
                              class="form-control" 
                              id="inputPassword" 
                              placeholder="Password"
                              />
                          </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Sign in</button>
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
