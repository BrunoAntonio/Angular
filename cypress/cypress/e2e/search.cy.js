
describe('Search', () => {
    beforeEach(() => {
  
      cy.visit('https://en.wikipedia.org/wiki/Main_Page')
    })
  
    it('Test Search Input', () => {
      cy.get('#searchInput').should('have.attr', 'placeholder', 'Search Wikipedia').as('searchField')

      cy.get('@searchField').type('Coimbra').click()
      cy.contains('Coimbra')

      cy.get('#bodyContent #mw-content-text ul').should('have.length', 20)
  
    })
  })