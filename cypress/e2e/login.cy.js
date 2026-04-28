describe('Login', () => {
  beforeEach(() => {
    // Arrange
    cy.visit('http://localhost:4000')
    //cy.screenshot('apos-visitar-site')

  })
  it('Login com dados validos devem permitir entrada no sistema', () => {
    // Act
    cy.fixture('credenciais').then(cred => {
      cy.get('#username').click().type(cred.valida.usuario)
      cy.get('#senha').click().type(cred.valida.senha)

    })
    
    cy.get('#login-section > .btn').click()

    // Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('Login com dados invalidos devem apresentar mensagem de erro', () => {
    // Act
    cy.fixture('credenciais').then(cred => {
      cy.get('#username').click().type(cred.invalida.usuario)
      cy.get('#senha').click().type(cred.invalida.senha)
    })
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('654321')
    cy.contains('button', 'Entrar').click()
    //cy.get('#login-section > .btn').click()

    // Assert
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })
})