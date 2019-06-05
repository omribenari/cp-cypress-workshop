/// <reference types="Cypress" />

const token =
  '50e78fb1bbd14641babf5eb37926d9f41a27783a2a0c42c7ba638f2c5cd15b79ea52b182aa714e20a4c9fd0acc762629';
const loginUrl = 'https://accounts-e2e.intuit.com/access_client/sign_in';

const user = {
  email: 'cypress1.iamtestpass@gmail.com',
  password: 'Password1!'
};

const login = () => {
  cy.request({
    method: 'POST',
    url: loginUrl,
    body: {
      username: user.email,
      password: user.password,
      namespaceId: '50000003'
    }
  }).then(response => {
    if (response.status !== 200) {
      cy.log('An error occurred while trying to sign in to qb');
    }
  });
};

describe('Login tests', () => {
  it('should contain sign-in button', () => {
    cy.visit(token);
    cy.contains('header', 'Sign in');
  });

  it('should be signed in', () => {
    login();
    cy.visit(token);
    cy.contains('header', user.email);
  });

  it.only('should signed out', () => {
    login();
    cy.visit(token);
    cy.get('header')
      .contains(user.email)
      .click();
    cy.get('.sign-out-menu')
      .contains('Sign out')
      .click();
    cy.contains('header', 'Sign in');
  });
});
