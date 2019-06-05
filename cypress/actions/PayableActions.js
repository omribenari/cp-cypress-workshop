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
  }
};
