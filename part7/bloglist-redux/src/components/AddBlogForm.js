import React from 'react';
import PropTypes from "prop-types"


const AddBlogFrom = ( { handleAddBlog,
                        title, 
                        author,
                        url}) =>{

    

   return(
        <div className = "form-group" id = "form-group-blog">
             <form onSubmit={handleAddBlog} id ="add-blog-form">
                      <div class="form-group row">
                          <label for="title" class="col-sm-2 col-form-label">Title</label>
                          <div class="col-sm-10">
                          <input 
                                   {...title.inputProps} 
                                    required
                                    class="form-control"
                                    id="title" 
                                    />
                          </div>
                      </div>
                      <div class="form-group row">
                          <label for="author" class="col-sm-2 col-form-label">Author</label>
                          <div class="col-sm-10">
                          <input 
                                    {...author.inputProps}  
                                    required
                                    class="form-control"
                                    id="author" 
                                    />
                          </div>
                      </div>
                      <div class="form-group row">
                          <label for="url" class="col-sm-2 col-form-label">Url</label>
                          <div class="col-sm-10">
                          <input 
                                    {...url.inputProps} 
                                    required
                                    class="form-control"
                                    id="url" 
                                    />
                          </div>
                      </div>            
                     <div className = "form-group-control">
                        <button 
                            type="submit" 
                            class="btn btn-primary"
                            id="create"
                            >
                              Create
                         </button>
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