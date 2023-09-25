// Credenciais alteradas para preservação e segurança da aplicação

///<reference types="cypress"/>

describe('LoginOk', () => {

    it('LoginOK', () => {
        // Entrando no site

        cy.visit('*****')

        // Digitando o email

        cy.contains('[class="q-field__inner relative-position col self-stretch"]', 'Email')
            .click({ force: true })
            .type('*****')

        // Digitando a senha errada

        cy.contains('[class="q-field__inner relative-position col self-stretch"]', 'Senha')
            .click({ force: true })
            .type('*****')

        // Clicando em entrar

        cy.contains('[class="block"]', 'Entrar')
            .click()
    })
})