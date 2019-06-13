/// <reference types="Cypress" />

import { LoginActions as Actions } from '../actions/LoginActions';

const token =
  '50e78fb1bbd14641babf5eb37926d9f41a27783a2a0c42c7ba638f2c5cd15b79ea52b182aa714e20a4c9fd0acc762629';

const email = 'cypress1.iamtestpass@gmail.com';

describe('Login tests', () => {
  it('should contain sign-in button', () => {
    cy.visit(token);
    Actions.checkIfSignedOut();
  });

  describe('User is signed in', () => {
    beforeEach(() => {
      cy.login();
      cy.visit(token);
    });

    it('should be signed in', () => {
      Actions.checkIfSignedIn(email);
    });

    it('should signed out', () => {
      Actions.signOut(email);
      Actions.checkIfSignedOut();
    });
  });
});
