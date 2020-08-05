describe('Bloglist-redux app', function() {
    it('front page can be opened', function() {
      cy.visit('http://localhost:3000')
      cy.contains('Login')
      cy.contains('Bloglist app, Department of Computer Science, University of Helsinki 2020')
    })
  })