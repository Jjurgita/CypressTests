describe('SP6 Tests', () => {
    it('Visits app page successfully', () => {
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
        cy.contains('Sveikas atvykęs!')
    })
    it('Enters the name and presses the button, receiving the hello message', () => {
        // given
        let url = 'http://localhost/test-app/index.html'
        // when
        cy.visit(url)
        cy.get('#name_input').type('Jurgita')
        cy.get('button').click() 
        // then
        cy.contains('Labas, Jurgita!')
    })
    it("Is able to enter form data", () => {
        // given
        let url = "http://localhost/test-app/index.html";
        // when
        cy.visit(url);
        // then
        cy.get('#name_input')
            .type('jurgita@k.com')
            .should('have.value', 'jurgita@k.com')
    })
})