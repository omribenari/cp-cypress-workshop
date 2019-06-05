/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * login user
     * @example
     * cy.login() // use default credentials from env file
     * cy.login('name@domain.com', 'Passw0rd!1') // custom credentials
     */
    login(usr?: string, pw?: string): Chainable<any>;
  }
}
