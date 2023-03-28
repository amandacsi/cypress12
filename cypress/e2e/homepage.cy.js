describe('Teste de APP DO SAP', function () {
  it('Logar na plataforma', () => {
    cy.visit(' https://s4hqa.tachyonix.io:44301/sap/bc/ui5_ui5/sap/Y_TSA_BUILDER/webapp/index.html', {
      auth: {
        username: 'qa02',
        password: 'Tachy0102#$@#',

      },


    })
    cy.reload()
    cy.wait(2000)
    cy.contains('Tachyonix')
    cy.get('#__field0-I').type('App_Teste_2023')
    cy.get('#__field0-search').click()
    cy.contains('App_Teste_2023')

  })
  
})

 