import { fixCypressSpec } from '../support'

beforeEach(fixCypressSpec(__filename))

describe('Visual testing', () => {
    it('Matches snapshot', () => {
      // given
      let url = 'http://localhost/test-app/index.html'
      // when
      cy.visit(url)
      cy.get('#name_input').type('Jurgita')
      cy.get('button').click() 
      // then
      cy.get('body').toMatchImageSnapshot({
      imageConfig: {
        threshold: 0.001,
      },
  })
    })
})
