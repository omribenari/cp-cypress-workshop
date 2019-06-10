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
  }
}
