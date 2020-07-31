
import React from "react"
import { Link } from "react-router-dom"
import { useSelector} from 'react-redux'

const Users = () => {
    const users = useSelector(state => state.users)
    console.log("Userlist: ", users)
    const divStyle = {
      marginTop: 20
  }
    const showUsers = () => {
      return users.map(user => (
        <tr key={user.id}>
          <td>
             <Link to={`users/${user.id}`}>{user.name}</Link>
          </td>
          <td>{user.blogs.length}</td>
        </tr>
      ))
    }
    return (
      <div style = {divStyle}>
          <h5>
           Users
          </h5>        
          <table>
                <thead>
                  <tr>
                      <th> Name</th>
                      <th> Blogs Created </th>
                  </tr>
                </thead>
                <tbody>
                    {showUsers()}
                </tbody>
          </table>  
      </div>
    )
  }

  export default Users