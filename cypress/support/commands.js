// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

const loginUrl = 'https://accounts-e2e.intuit.com/access_client/sign_in';

const user = {
  email: 'cypress1.iamtestpass@gmail.com',
  password: 'Password1!'
};

Cypress.Commands.add('login', (usr = user.email, pw = user.password) => {
  return cy
    .request({
      method: 'POST',
      url: loginUrl,
      body: {
        username: usr,
        password: pw,
        namespaceId: '50000003'
      }
    })
    .then(response => {
      if (response.status !== 200) {
        cy.log('An error occurred while trying to sign in to qb');
      }
      return response;
    });
});

Cypress.Commands.add('getReduxStore', () => {
  return cy
    .window()
    .its('__NEXT_REDUX_STORE__')
    .invoke('getState');
});
