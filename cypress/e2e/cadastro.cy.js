/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro no Hub de Leitura', () => {

    beforeEach(() => {
        cy.visit('register.html')
    });

    it('Deve realizar o cadasstro com sucesso, usando função JS', () => {
        let email = `exemplocadastro${Date.now()}@teste.com`
        cy.get('#name').type('Guilherme FaLco')
        cy.get('#email').type(email)
        cy.get('#phone').type('11900000000')
        cy.get('#password').type('Mudar1234')
        cy.get('#toggle-password').click()
        cy.get('#confirm-password').type('Mudar134')
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

});