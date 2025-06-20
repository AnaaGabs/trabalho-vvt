// cypress/support/commands.ts
import 'cypress-iframe';
import 'cypress-real-events';

Cypress.Commands.add('typelogin', (url, username, password) => {
  cy.visit(url);
  cy.get('#login').type(username);
  cy.get('#senha').type(password);
  cy.get("form").within(() => {
    cy.get("button[type='submit']").click();
  });
});
