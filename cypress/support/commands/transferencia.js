Cypress.Commands.add('doTransfer', (originAccount, destinyAccount, value) => {
    cy.selectOptionCombobox('conta-origem', originAccount)
    cy.selectOptionCombobox('conta-destino', destinyAccount)
    cy.get('#valor').type(value)
    cy.contains('button', 'Transferir').click()
})