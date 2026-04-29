describe('Transferencias', () => {
    beforeEach(() => {
        // Arrange

        const url = Cypress.env('URL') || '/'
        cy.visit(url)
        cy.fixture('credenciais').then(cred => {
            cy.get('#username').click().type(cred.valida.usuario)
            cy.get('#senha').click().type(cred.valida.senha)
            cy.get('#login-section > .btn').click()
        //cy.screenshot('apos-visitar-site')
        })

    })

    it('Deve transfereir quando informo dados e valor validos', () => {

        // // Act
        cy.get("label[for='conta-origem']").parent().as('campo-conta-origem')
        cy.get('@campo-conta-origem').click()
        cy.get('@campo-conta-origem')
        .contains('João da Silva com saldo de R$ 14700.00 (Ativa)')
        .click()


        cy.get("label[for='conta-destino']").parent().as('campo-conta-destino')
        cy.get('@campo-conta-destino').click()
        cy.get('@campo-conta-destino')
        .contains('Maria Oliveira com saldo de R$ 23300.00 (Ativa)')
        .click()


    })
})