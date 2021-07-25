describe('Test Home Page', () => {
    it('Visits homepage successfully', () => {
        // given
        let url = 'http://localhost/test-app/index.html'
        // when / then
        cy.visit(url)
    })
    it('Homepage contains the greeting message', () => {
        // given
        let url = 'http://localhost/test-app/index.html'
        // when
        cy.visit(url)
        // then
        cy.contains('Hello world!')
    })
    it('Enters the name and presses the button, receiving the hello message', () => {
        // given
        let url = 'http://localhost/test-app/index.html'
        // when
        cy.visit(url)
        cy.get('#name_input').type('Jurgita')
        cy.get('button').click() 
        // then
        cy.contains('Labas Jurgita!')
    })
    it("Is able to enter form data", () => {
        // given
        let url = "https://example.cypress.io";
        // when
        cy.visit(url);
        cy.contains('type').click()
        // then
        cy.url().should('include', '/commands/actions');
        cy.get('.action-email')
            .type('jurgita@k.com')
            .should('have.value', 'jurgita@k.com')
    })
})