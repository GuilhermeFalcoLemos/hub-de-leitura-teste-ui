/// <reference types="cypress"/>

describe('Funcionalidade: Catálogo de livros', () => {

    beforeEach(() => {
        cy.visit('catalog.html')
    });

    it.skip('Botão de Adicionar a cesta', () => {
        cy.get(':nth-child(1) > .card > .card-body > .mt-auto > .d-grid > .btn-primary').click
        cy.get('#cart-count').should('contain', 1)
    });

    it('Deve clicar em todos os boõptes de adicionar', () => {
        cy.get(' .btn-primary').click({ multiple: true })

    });

    it('Clicar no primeiro Botão de Adicionar a cesta', () => {
        cy.get(' .btn-primary').first().click()
    });

    it('Clicar no ultimo Botão de Adicionar a cesta', () => {
        cy.get(' .btn-primary').last().click()
    });

    it('Clicar no terceiro Botão de Adicionar a cesta', () => {
        cy.get(' .btn-primary').eq(2).click()
    });

    it('Clicar no quinto Botão de Adicionar a cesta', () => {
        cy.get(' .btn-primary').eq(4).click()
        cy.get('#global-alert-container').should('contain', 'A Metamorfose')

    });

    it('Clicar no livro e direcionar para a PDP', () => {
        cy.contains('Dom Casmurro').click()
        cy.url().should('include', 'book-details')
        cy.get('#add-to-cart-btn').click()
        cy.get('#alert-container').should('contain', ' Livro adicionado à cesta com sucesso!')
    });
});