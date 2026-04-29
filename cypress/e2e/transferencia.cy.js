describe('Transferencias', () => {
    beforeEach(() => {
        // Arrange

        const url = Cypress.env('URL') || '/'
        cy.visit(url)
        cy.loginValidCred()
        //cy.screenshot('apos-visitar-site')

    })

    it('Deve transferir quando informo dados e valor validos', () => {

        // // Act
        cy.doTransfer('João da Silva', 'Maria', '11')
        cy.verifyMsgToast('Transferência realizada!')

    })

    it('Deve apresentar erro quando tentar transferir igual maior que R$ 50000', () => {
        cy.doTransfer('João da Silva', 'Maria', '5000')
        cy.verifyMsgToast('Autenticação necessária para transferências acima de R$5.000,00.')

    })
})