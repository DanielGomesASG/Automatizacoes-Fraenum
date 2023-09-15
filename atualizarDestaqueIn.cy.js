///<reference types="cypress"/>

describe('atualizarDestaqueIn', () => {

  it('atualizarDestaqueIn', () => {
      // Entrando no site
      
      cy.visit('http://backoffice.360suites.com.br/')
      
      // Digitando o email

      cy.contains('[class="q-field__inner relative-position col self-stretch"]', 'Email')
      .click({force: true})
      .type('dan@360suites.com.br')

      // Digitando a senha

      cy.contains('[class="q-field__inner relative-position col self-stretch"]', 'Senha')
      .click({force: true})
      .type('F@B3rc4st3l')
      
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

      cy.contains('[class="q-item__section +column q-item__section--main justify-center"]', 'Comodidades')
      .click()
      .wait(2500)

      // Atualizar comodidade

      cy.contains('[class="text-center"]', 'ATESTE 1')
        .next()
        .next()
        .next()
        .next()
        .next()
        .next()
        .find('[class="q-btn q-btn-item non-selectable no-outline q-btn--flat q-btn--round text-primary q-btn--actionable q-focusable q-hoverable"]')
        .click({force:true})

      // Atualizar Destaque

      cy.contains('[class="q-toggle__label q-anchor--skip"]', 'Destacar comodidade')
      .click()
      
      // Salvar

      //cy.contains('[class="block"]', 'Salvar')
      //.click()

  })
})