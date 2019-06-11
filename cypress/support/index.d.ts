/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * login user
     * @example
     *   cy.login() // use default credentials from env file
     *   cy.login(email, password) // custom credentials
     */
    login(usr?: string, pw?: string): Chainable<any>;

    /**
     * access the redux store in its current state
     * @example
     * cy.getReduxStore().then(store => {
     *   actions.getRootElement().contains(store.invoice.invoiceNumber);
     * }
     */
    getReduxStore(): Chainable<any>;
  }
}
