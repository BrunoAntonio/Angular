
describe('Change Page', () => {
    beforeEach(() => {
  
      cy.visit('https://en.wikipedia.org/wiki/Main_Page')
    })
  
    it('Test Talk Header Link', () => {
      cy.get('#pt-anontalk a').should('have.attr', 'href', '/wiki/Special:MyTalk').as('Talk')
  
      cy.get('@Talk').click()
      cy.get('.ext-discussiontools-emptystate-text h3').contains('Welcome to this talk page')
      
    })
  })