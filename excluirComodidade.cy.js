// Credenciais alteradas para preservação e segurança da aplicação

///<reference types="cypress"/>

describe('atualizarComunidade', () => {

  it('atualizarComunidade', () => {
    // Entrando no site

    cy.visit('*****')

    // Digitando o email

    cy.contains('[class="q-field__inner relative-position col self-stretch"]', 'Email')
      .click({ force: true })
      .type('*****')

    // Digitando a senha

    cy.contains('[class="q-field__inner relative-position col self-stretch"]', 'Senha')
      .click({ force: true })
      .type('*****')

    // Clicando em entrar

    cy.contains('[class="block"]', 'Entrar')
      .click()
      .wait(5000)

    // Abrindo menu lateral

    cy.contains('[class="q-icon notranslate material-icons"]', 'menu')
      .click()

    // Abrir Cadastros Site

    cy.contains('[class="q-item__label"]', 'Cadastros Site')
      .click()

    // Abrir comodidades

    cy.contains('[class="q-item__section column q-item__section--main justify-center"]', 'Comodidades')
      .click()
      .wait(2500)

    //  Excluir comodidade

    // cy.contains('[class="q-td text-center"]', 'ATESTE 1')
    //   .parents('[class="q-tr "]')
    //   .find('[class="q-btn__content text-center col items-center q-anchor--skip justify-center row"]')
    //   .contains('delete')
    //   .click({force:true})

  })
})