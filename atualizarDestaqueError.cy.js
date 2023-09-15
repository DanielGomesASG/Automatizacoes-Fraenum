///<reference types="cypress"/>

describe('atualizarDestaqueError', () => {

  it('atualizarDestaqueError', () => {
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

      cy.contains('[class="q-item__section column q-item__section--main justify-center"]', 'Comodidades')
      .click()
      .wait(2500)

      // Atualizar Destaque

      cy.contains('[class="text-center"]', 'ATESTE 1')
        .next()
        .next()
        .next()
        .find('[class="q-toggle cursor-pointer no-outline row inline no-wrap items-center"]')
        /*Ao liberar a função click o status de destaque do ATESTE 1
        é alterado, caso o limite de destaques ja tiver sido atingido
        haverá erro e o teste terá sido concluído*/ 
        //.click({force:true})

  })
})