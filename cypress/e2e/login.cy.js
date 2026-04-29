describe('Login', () => {
  beforeEach(() => {
    // Arrange
    
    const url = Cypress.env('URL') || '/'
    cy.visit(url)
    //cy.screenshot('apos-visitar-site')

  })
  it('Login com dados validos devem permitir entrada no sistema', () => {
    // Act
    cy.loginValidCred()

    // Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('Login com dados invalidos devem apresentar mensagem de erro', () => {
    // Act
    cy.loginInvalidCred()
    //cy.get('#login-section > .btn').click()

    // Assert
    cy.verifyMsgToast('Erro no login. Tente novamente.')
  })
})