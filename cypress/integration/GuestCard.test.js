/// <reference types="Cypress" />
import { PayableActions as Actions } from '../actions/PayableActions';

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
    Actions.getPayButton();
  });

  it('Try to pay with empty form', () => {
    Actions.clickOnPayButton();
    Actions.haveValidationErrors(5);
  });

  it('Pay 1$ with a card', () => {
    Actions.inputTransactionAmount(amountToPay);

    Actions.inputCard_Name(card.nameOnCard);
    Actions.inputCard_Number(card.cardNumber);
    Actions.inputCard_ExpDate(card.expDate);
    Actions.inputCard_Cvv(card.cvvCode);
    Actions.inputCard_PostalCode(card.postalCode);

    Actions.clickOnPayButton();
  });
});
