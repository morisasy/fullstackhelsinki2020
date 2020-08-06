describe('Bloglist-redux app', function() {
    beforeEach(function() {
      cy.visit('http://localhost:3000/login')
    })

    it('front page can be opened', function() {
      cy.contains('Login')
      cy.contains('Bloglist app, Department of Computer Science, University of Helsinki 2019')
    })

    it('login form can be opened', function() {
      cy.contains('Login').click()
    })
  })