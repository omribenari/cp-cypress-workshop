/// <reference types="Cypress" />

// url to an individual invoice will be provided to each developer
const url =
  'https://connect.e2e.intuit.com/portal/app/CommerceNetwork/view/50e78fb1bbd14641babf5eb37926d9f41a27783a2a0c42c7ba638f2c5cd15b79ea52b182aa714e20a4c9fd0acc762629?cta=viewinvoicenow&locale=en_US';

describe('Guest card tests', () => {
  beforeEach(() => {
    cy.visit(url);
  });
  
  it('load page', () => {
    cy.contains('button', 'Pay');
  });

  it('try to pay with empty form', () => {
    cy.contains('button', 'Pay').click();
    cy.get('.field-error-message-wrapper').should('have.length', 5);
  });
});
