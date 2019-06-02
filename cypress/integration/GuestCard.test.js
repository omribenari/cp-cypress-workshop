/// <reference types="Cypress" />
const url = ''; // url to an individual invoice will be provided to each participate

it('load page', () => {
    cy.visit(url)
});