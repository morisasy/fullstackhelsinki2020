const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
const jwt = require('jsonwebtoken')


blogsRouter.post('/', async(request, response, next) => {
  const body = request.body
  //const token = getTokenFrom(request)

  try {

    const decodedToken = jwt.verify(request.token, process.env.SECRET)
    console.log(decodedToken)

    if (!request.token || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }

    if (body.title === undefined && body.url === undefined) {
      return response.status(400).json({ error: 'content missing' })
    }

    const user = await User.findById(decodedToken.id)

    const blog = new Blog({
      title: body.title,
      author: body.author,
      url: body.url,
      likes: body.likes ? body.likes : 0,
      comments: [],
      user: user._id
    })

    const savedBlog = await blog.save()
    user.blogs = user.blogs.concat(savedBlog._id)
    await user.save()
    response.json(savedBlog.toJSON())
  } catch (exception) {
    next(exception)
  }
})



blogsRouter.get('/', async(request, response) => {
  const blogs = await Blog
    .find({})
    .populate('user')
  response.json(blogs.map(blog => blog.toJSON()))
})


blogsRouter.get('/info', async (req, res, next) => {
  try {
    const totalBlog = await Blog.find({}).countDocuments()
    console.log('Persons List:', totalBlog )
    res.send(`
            <p>The blog List  has info of ${totalBlog} blogs</p>
            <p>${new Date()}</p>
        `)
  } catch (error) {
    next(error)
  }
})

blogsRouter.get('/:id', async(request, response, next) => {

  try {
    const blog = await Blog.findById(request.params.id)
    if (blog) {
      response.json(blog.toJSON())
    } else {
      response.status(404).end()
    }
  } catch (exception) {
    next(exception)
  }

})


blogsRouter.delete('/:id', async(request, response, next) => {
  try {
    const decodedToken = jwt.verify(request.token, process.env.SECRET)
    if (!request.token || !decodedToken.id) {
      return response.status(401).json({ error: 'Missing or Invalid token' })
    }

    const blog = await Blog.findById(request.params.id)
    if (!(blog.user.toString() === decodedToken.id.toString())) {
      return response.status(401).json({ error: 'unauthorized user token' })
    }
    await Blog.findByIdAndRemove(request.params.id)
    response.status(204).end()
  } catch (exception) {
    next(exception)
  }
})

blogsRouter.put('/:id', async(request, response, next) => {
  const body = request.body
  const blogToUpdate = {
    title: body.title,
    author: body.author,
    likes: body.likes === undefined ? 0 : body.likes,
    url: body.url,
    comments: body.comments,
    date: new Date()
  }

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, blogToUpdate, { 
      new: true 
    }).populate('user', { username: 1, name: 1 })
    response.json(updatedBlog.toJSON())
  } catch (exception) {
    next(exception)
  }
})

blogsRoute.get('/:id/comments', async (request, response) => {
  const blog = await Blog
      .findById(request.params.id)
      .populate('comments', { comment: 1, blogID: 1, id: 1 })
  response.json(blog.comments.map(b => b.toJSON()))
})

blogsRoute.post('/:id/comments', async (request, response, next) => {
  const body = request.body
  try {
   
    if (body.content === undefined) {
      return response.status(400).json({ error: 'empty content!' })
    }

    const comment = new Comment({
      comment: body.content,
      blogID: request.params.id.toString()
    })

    const savedComment = await comment.save()

    const blog = await Blog.findById(request.params.id)
    blog.comments = blog.comments.concat(savedComment)
    await blog.save()

    response.json(blog.toJSON())
  } catch (exception) {
    next(exception)
  }
})

module.exports = blogsRouter