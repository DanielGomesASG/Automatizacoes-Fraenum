///<reference types="cypress"/>

describe('LoginNoOk', () => {

    it('LoginNoOK', () => {
        // Entrando no site
        
        cy.visit('http://backoffice.360suites.com.br/')
        
        // Digitando o email

        cy.contains('[class="q-field__inner relative-position col self-stretch"]', 'Email')
        .click({force: true})
        .type('dan@360suites.com.br')

        // Digitando a senha errada

        cy.contains('[class="q-field__inner relative-position col self-stretch"]', 'Senha')
        .click({force: true})
        .type('F@B3rc4st3')
        
        // Clicando em entrar

        cy.contains('[class="block"]', 'Entrar')
        .click()
    })
})