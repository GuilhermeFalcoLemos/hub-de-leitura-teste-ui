/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';
import cadastroPage from '../support/pages/cadastro-page';

describe('Funcionalidade: Cadastro no Hub de Leitura', () => {

    beforeEach(() => {
        cadastroPage.visitarPaginaCadastro()
    });

    afterEach(() => {
        cy.screenshot()
    });
    it('Deve realizar o cadasstro com sucesso, usando função JS', () => {
        let email = `exemplocadastro${Date.now()}@teste.com`
        cy.get('#name').type('Guilherme FaLco')
        cy.get('#email').type(email)
        cy.get('#phone').type('11900000000')
        cy.get('#password').type('Mudar1234')
        cy.get('#toggle-password').click()
        cy.get('#confirm-password').type('Mudar1234')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        //Resultado esperado
        cy.url().should('include', 'dashboard')
    });

    it('Deve realizar o cadasstro com sucesso, usando Faker', () => {
        let nome = faker.person.fullName()
        let email = faker.internet.email()
        cy.get('#name').type(nome)
        cy.get('#email').type(email)
        cy.get('#phone').type('11900000000')
        cy.get('#password').type('Mudar1234')
        cy.get('#toggle-password').click()
        cy.get('#confirm-password').type('Mudar1234')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        //Resultado esperado
        cy.url().should('include', 'dashboard')
        cy.get('#user-name').should('contain', nome)
    });

    it('Deve preencher cadastro com sucesso- Comando customizado', () => {
        let nome = faker.person.fullName()
        let email = faker.internet.email()
        cy.preencherCadastro(nome, email, '11900000000', 'Mudar1234', 'Mudar1234')
        //Resultado esperado
        cy.url().should('include', 'dashboard')
    });

    it('Deve ser feito o cadastro com sucesso - Usando Page Objects ', () => {
        let nome = faker.person.fullName()
        let email = faker.internet.email()
        let number = faker.phone.number()
        cadastroPage.preencherCadastro(nome, email, number, 'senha123', 'senha123')
        //Resultado esperado
        cy.url().should('include', 'dashboard')
    });

    it.only('Deve validar mensagem ao tentar cadastrar sem preencher o Nome ', () => {
        let nome = faker.person.fullName()
        let email = faker.internet.email()
        let number = faker.phone.number()
        cadastroPage.preencherCadastro('', email, number, 'senha123', 'senha123')
        cy.get(':nth-child(1) > .invalid-feedback').should('contain', 'Nome deve ter pelo menos 2 caracteres')
    });

});