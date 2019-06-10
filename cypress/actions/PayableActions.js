export const PayableActions = {
  getPayButton() {
    return cy.contains('button', 'Pay');
  },
  clickOnPayButton() {
    this.getPayButton().click();
  },
  haveValidationErrors(expectedNumberOfErrors) {
    cy.get('.field-error-message-wrapper').should(
      'have.length',
      expectedNumberOfErrors
    );
  },
  inputTransactionAmount(amountToPay) {
    cy.get('.payment-amount-label').contains('Payment amount');
    cy.get('.payment-amount-input-wrapper').within(() => {
      cy.get('label.display-amount').click();
      cy.get('input')
        .clear()
        .type(amountToPay);
    });
  },
  inputCard_Name(nameOnCard) {
    cy.get('input[name="name"]').type(nameOnCard);
  },
  inputCard_Number(cardNumber) {
    cy.get('input[name="number"]').type(cardNumber);
  },
  inputCard_ExpDate(expDate) {
    cy.get('input[name="expDate"]').type(expDate);
  },
  inputCard_Cvv(cvv) {
    cy.get('input[name="cvc"]').type(cvv);
  },
  inputCard_PostalCode(value) {
    cy.get('input[name="zipCode"]')
      .clear()
      .type(value);
  }
};
