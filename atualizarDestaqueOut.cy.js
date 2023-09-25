// Credenciais alteradas para preservação e segurança da aplicação

///<reference types="cypress"/>

describe('atualizarDestaqueOut', () => {

  it('atualizarDestaqueOut', () => {
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

    // Atualizar Destaque

    cy.contains('[class="text-center"]', 'TV')
      .next()
      .next()
      .next()
      .find('[class="q-toggle cursor-pointer no-outline row inline no-wrap items-center"]')
    //Ao liberar a função click o status de destaque da TV é alterado
    //.click({force:true})

  })
})