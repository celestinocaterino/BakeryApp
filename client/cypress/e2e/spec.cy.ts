describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3006/');

    cy.get('.header__title').should('have.text', 'Bakery App');
    
    cy.get('.header > a').should('have.attr', 'href').and('include', 'login');

    cy.visit('http://localhost:3006/login');

    cy.get('#email').type('admin@admin.com')

    cy.get('#password').type('password');

    cy.get('button[type=submit]').click()
  })
})