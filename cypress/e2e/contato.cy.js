describe("Funcionalidade Contato", () => {

  beforeEach(() => {
    cy.visit('index.html')
  });
  it("Deve preencher formulario de contato om sucesso", () => {

    cy.get('[name="name"]').type('Guilherme')
    cy.get('[name="email"]').type('teste.estudo@teste.com')
    cy.get('[name="subject"]').select('Suporte Técnico')
    cy.get('[name="message"]').type('Apenas uma mensagem teste para estudo de automação')
    cy.get('#btn-submit').click()
    // Resultado esperado
    cy.contains('Contato enviado com sucesso').should('exist')
  });

  it("Vaidar mensagem de erro ao enviar sem nome", () => {

    cy.get('[name="name"]').clear()
    cy.get('[name="email"]').type('teste.estudo@teste.com')
    cy.get('[name="subject"]').select('Suporte Técnico')
    cy.get('[name="message"]').type('Apenas uma mensagem teste para estudo de automação')
    cy.get('#btn-submit').click()
    // Resultado esperado
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo Nome')
  });

  it("Vaidar mensagem de erro ao enviar sem email", () => {

    cy.get('[name="name"]').type('Guilherme')
    cy.get('[name="email"]').clear()
    cy.get('[name="subject"]').select('Suporte Técnico')
    cy.get('[name="message"]').type('Apenas uma mensagem teste para estudo de automação')
    cy.get('#btn-submit').click()
    // Resultado esperado
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo E-mail')
  });

  it("Vaidar mensagem de erro ao enviar sem assunto", () => {

    cy.get('[name="name"]').type('Guilherme')
    cy.get('[name="email"]').type('teste.estudo@teste.com')
    // cy.get('[name="subject"]').select('Suporte Técnico')
    cy.get('[name="message"]').type('Apenas uma mensagem teste para estudo de automação')
    cy.get('#btn-submit').click()
    // Resultado esperado
    cy.get('#alert-container').should('contain', 'Por favor, selecione o Assunto')
  });

  it("Vaidar mensagem de erro ao enviar sem mensagem", () => {

    cy.get('[name="name"]').type('Guilherme')
    cy.get('[name="email"]').type('teste.estudo@teste.com')
    cy.get('[name="subject"]').select('Suporte Técnico')
    cy.get('[name="message"]').clear()
    cy.get('#btn-submit').click()
    // Resultado esperado
    cy.get('#alert-container').should('contain', 'Por favor, escreva sua Mensagem')
  });

});