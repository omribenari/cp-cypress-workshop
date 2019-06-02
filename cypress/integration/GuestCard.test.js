/// <reference types="Cypress" />
const url = '';

it('load page', () => {
    cy.visit(url);
    cy.contains('button', 'Pay');
});