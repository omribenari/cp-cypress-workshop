export const LoginActions = {
  setRoutes() {
    cy.server();
    cy.route(
      'DELETE',
      `/portal/app/CommerceNetwork/view/rest/authenticate/logout`
    ).as('logout');
  },
  checkIfSignedOut() {
    cy.contains('header', 'Sign in');
  },
  checkIfSignedIn(email) {
    return cy.get('header').contains(email);
  },
  signOut(email) {
    this.checkIfSignedIn(email).click();
    cy.get('.sign-out-menu')
      .contains('Sign out')
      .click();
    cy.wait('@logout');
  }
};
