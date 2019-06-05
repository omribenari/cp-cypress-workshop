/// <reference types="Cypress" />

const token =
  '50e78fb1bbd14641babf5eb37926d9f41a27783a2a0c42c7ba638f2c5cd15b79ea52b182aa714e20a4c9fd0acc762629';

const email = 'cypress1.iamtestpass@gmail.com';

describe('Login tests', () => {
  it('should contain sign-in button', () => {
    cy.visit(token);
    cy.contains('header', 'Sign in');
  });

  it('should be signed in', () => {
    cy.login();
    cy.visit(token);
    cy.contains('header', email);
  });

  it.only('should signed out', () => {
    cy.login();
    cy.visit(token);
    cy.get('header')
      .contains(email)
      .click();
    cy.get('.sign-out-menu')
      .contains('Sign out')
      .click();
    cy.contains('header', 'Sign in');
  });
});
