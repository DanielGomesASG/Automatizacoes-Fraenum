///<reference types="cypress"/>

describe('pessoaJuridicaOk', () => {

  it('pessoaJuridicaOk', () => {
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

      // Abrir Investidor

      cy.contains('[class="q-item__label"]', 'Investidor')
      .click()

      // Abrir usuários

      cy.contains('[class="q-item__section column q-item__section--main justify-center"]', 'Usuários Investidores')
      .click()

      // Atualizar usuário

      cy.contains('[class="q-td text-center"]', '2')
        .parents('[class="q-tr "]')
        .find('[name="update"]')
        .click({force:true})
      
      // Alterar nome

      cy.contains('[class="q-field__control-container col relative-position row no-wrap q-anchor--skip"]', 'Nome Completo')
      .click()
      .type('{selectall}{backspace}')
      .type('Dan Adrignoli')

      // Alterar telefone

      cy.contains('[class="q-field__control-container col relative-position row no-wrap q-anchor--skip"]', 'Telefone')
      .click()
      .type('{selectall}{backspace}')
      .type('12345678910')

      // Selecionando pessoa jurídica

      cy.contains('[class="block"]', 'Pessoa Jurídica')
      .click()

      // Alterar CNPJ

      cy.contains('[class="q-field__control-container col relative-position row no-wrap q-anchor--skip"]', 'CNPJ')
      .click()
      .type('{selectall}{backspace}')
      .type('05711570000103')

      // Alterar razão social

      cy.contains('[class="q-field__control-container col relative-position row no-wrap q-anchor--skip"]', 'Razão Social')
      .click()
      .type('{selectall}{backspace}')
      .type('Sistemas Dan de qualidade')

      // Alterar nome fantasia

      cy.contains('[class="q-field__control-container col relative-position row no-wrap q-anchor--skip"]', 'Nome Fantasia')
      .click()
      .type('{selectall}{backspace}')
      .type('Sistemas Dan de qualidade')

      // Salvar

      //cy.contains('[class="block"]', 'Salvar')
      //.click()

  })
})