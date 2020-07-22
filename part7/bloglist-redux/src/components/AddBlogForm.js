import React from 'react';
import PropTypes from "prop-types"


const AddBlogFrom = ( { handleAddBlog,
                        title, 
                        author,
                        url}) =>{
  //console.log("add form: ", props)
 /* const { handleAddBlog,
          title, 
          author,
          url} = props
          */
    

   return(
        <div className = "form-group">
             <form onSubmit={handleAddBlog}>
                      <div className = "form-group-control">
                        Title: <input 
                                   {...title.inputProps} 
                                    required
                                    />
                        </div>
                        <div className = "form-group-control">
                        Author: <input 
                                     {...author.inputProps} 
                                    required
                                    />
                        </div>
                        <div className = "form-group-control">
                        url: <input 
                                    {...url.inputProps} 
                                    required
                                    />
                        </div>
                        <div className = "form-group-control">
                        <button type="submit">Create</button>
                        </div>
            </form>
        </div>
    )
}

AddBlogFrom.propTypes = {
    handleAddBlog: PropTypes.func.isRequired,
    title: PropTypes.object.isRequired,
    author: PropTypes.object.isRequired,
    url: PropTypes.object.isRequired
  }

export default AddBlogFrom;