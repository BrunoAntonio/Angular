const faker = require('faker')

describe('Search', () => {
    beforeEach(() => {
      
      cy.visit('https://en.wikipedia.org/wiki/Main_Page')
     
    })
  
    it('Test Search Input', () => {
      cy.get('#searchInput').should('have.attr', 'placeholder', 'Search Wikipedia').as('searchField')

        const search = {
          name: faker.random.words(1),
        }

      cy.get('@searchField').type(search.name+'{enter}')

      cy.contains(search.name)

    })
  })