// cypress test code
//cypress.io
// https://fullstackopen.com/en/part5/end_to_end_testing

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


  describe('when logged in', function() {
    beforeEach(function() {
      cy.request('POST', 'http://localhost:3001/api/login', {
        username: 'mluukkai', password: 'salainen'
      }).then(response => {
        localStorage.setItem('blogListAppUser', JSON.stringify(response.body))
        cy.visit('http://localhost:3001')
      })
    }) 

    it('Bloglist', function() {
      cy.contains('Blog App')
      cy.contains('create').click()
      cy.contains('kotikatu Pekka')
    })
  })
