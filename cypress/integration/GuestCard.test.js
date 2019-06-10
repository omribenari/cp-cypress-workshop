/// <reference types="Cypress" />

const token =
  '50e78fb1bbd14641babf5eb37926d9f41a27783a2a0c42c7ba638f2c5cd15b79ea52b182aa714e20a4c9fd0acc762629';
const amountToPay = '1';
const card = {
  nameOnCard: 'Omri Ben Ari',
  cardNumber: '4111111111111111',
  expDate: '12/23',
  cvvCode: '123',
  postalCode: '12345'
};

describe('Guest card tests', () => {
  beforeEach(() => {
    cy.visit(token);
  });

  it('Load page', () => {
    cy.contains('button', 'Pay');
  });

  it('Try to pay with empty form', () => {
    cy.contains('button', 'Pay').click();
    cy.get('.field-error-message-wrapper').should('have.length', 5);
  });

  it('Pay 1$ with a card', () => {
    cy.get('.payment-amount-input-wrapper').within(() => {
      cy.get('label.display-amount').click();
      cy.get('input')
        .clear()
        .type(amountToPay);
    });

    cy.get('input[name="name"]').type(card.nameOnCard);
    cy.get('input[name="number"]').type(card.cardNumber);
    cy.get('input[name="expDate"]').type(card.expDate);
    cy.get('input[name="cvc"]').type(card.cvvCode);
    cy.get('input[name="zipCode"]').type(card.postalCode);

    cy.get('.cpButton.pay').click();
  });
});
