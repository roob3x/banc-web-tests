Cypress.Commands.add('verifyMsgToast', mensagem => {
    cy.get('.toast').should('have.text', mensagem)
})
Cypress.Commands.add('selectOptionCombobox', (labelInput, option) => {
    cy.get(`label[for="${labelInput}"]`).parent().as(`campo-${labelInput}`)
    cy.get(`@campo-${labelInput}`).click()
    cy.get(`@campo-${labelInput}`)
        .contains(option)
        .click()
})