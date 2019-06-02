/// <reference types="Cypress" />

// url to an individual invoice will be provided to each developer
const url = '';

it('load page', () => {
    cy.visit(url);
    cy.contains('button', 'Pay');
});