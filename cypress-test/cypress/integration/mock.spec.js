describe('Mock Page', () => {
    beforeEach(() => {

      cy.intercept(
        '**Wikipedia:Contents**',
        { fixture: 'search' }
        ).as('getContents')
  
      cy.visit('https://en.wikipedia.org/wiki/Main_Page')
      

    })
  
    it('Test Talk Header Link', () => {

    
        cy.get('#n-contents a').should('have.attr', 'href', '/wiki/Wikipedia:Contents').as('Contents')
        cy.get('@Contents').click()

        cy.wait('@getContents')

        cy.get('pre').contains("This is a Mock")
      
    })
  })