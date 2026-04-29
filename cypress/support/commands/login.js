Cypress.Commands.add('loginValidCred', () => {
    cy.fixture('credenciais').then(cred => {
        cy.get('#username').click().type(cred.valida.usuario)
        cy.get('#senha').click().type(cred.valida.senha)

    })

    cy.get('#login-section > .btn').click()
})

Cypress.Commands.add('loginInvalidCred', () => {
    cy.fixture('credenciais').then(cred => {
        cy.get('#username').click().type(cred.invalida.usuario)
        cy.get('#senha').click().type(cred.invalida.senha)
    })
    cy.contains('button', 'Entrar').click()

})