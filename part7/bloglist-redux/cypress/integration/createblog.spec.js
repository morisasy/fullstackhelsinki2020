
describe('Bloglist-redux app', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3001/login')
  })

  it('front page can be opened', function() {
    cy.contains('Login')
    cy.contains('Bloglist app, Department of Computer Science, University of Helsinki 2019')
  })


  it('user can login', function () {
    cy.contains('Login').click()
    cy.get('#username').type('mluukkai')
    cy.get('#password').type('salainen')
    cy.get('#login-button').click()
    cy.contains('mluukkai logged in')
  })

  it.only('login fails with wrong password', function() {
    cy.contains('Login').click()
    cy.get('#username').type('mluukkai')
    cy.get('#password').type('wrong')
    cy.get('#login-button').click()

    cy.get('.fade.alert.alert-danger')
    .should('contain', 'Wrong username or password')
    .and('have.css', 'color', 'rgb(114, 28, 36)')
    .and('have.css', 'border-style', 'solid')

    cy.get('html').should('not.contain', 'Matti Luukkainen logged in')
  })
 
  
})


describe('API test data', function () {

    beforeEach(function () {
              cy.request('POST', 'http://localhost:3001/api/testing/reset')
          
              const user = {
                name: 'Sussan Parvianen',
                username: 'suski',
                password: 'salainen'
              }
              cy.request('POST', 'http://localhost:3001/api/users/', user)
          
          
              cy.login({
                        username: 'suski', 
                          password: 'salainen'
               })
               cy.createBlog({
                title: 'lip shine',
                author: 'Ritta Matala',
                url: "https://www.myshinelips.fi"
              })
        
              cy.createBlog({
                title: 'Bitcoin is the future',
                author: 'Ville Pekka',
                url: "tokablogi.fi"
              })
        
              cy.createBlog({
                title: 'Digital marketing',
                author: 'Stacy Palkinto',
                url: "munbize.fi"
              }) 
      })
 

    })


    describe('When logged in', function () {
          beforeEach(function() {
            cy.login({ username: 'mluukkai', password: 'salainen' })
          })

          it('A blog can be created', function () {
            cy.contains('create').click()
            cy.get('#title').type('Blast in Beirut')
            cy.get('#author').type('modi')
            cy.get('#url').type('www.othernews.fi')
            cy.get('#btn-create').click()
            cy.contains('Blast in Beirut')
          })
          it('A blog can be liked', function () {
            cy.contains('like').click()
            cy.get('#title').type('Second Wave of Pandemic')
            cy.get('#author').type('Minna Arvoinen')
            cy.get('#url').type('www.ulko.fi')
            cy.get('#btn-create').click()
            cy.contains('comment').click()
            cy.get('#btn-like').click()
            cy.contains('likes: 1').click()
          })
    })