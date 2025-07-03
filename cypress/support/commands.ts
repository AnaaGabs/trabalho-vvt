// cypress/support/commands.ts
import 'cypress-iframe';
import 'cypress-real-events';
import "cypress-real-events/support";
import 'cypress-file-upload';

Cypress.Commands.add('typelogin', (url, username, password) => {
  cy.visit(url);
  cy.get('#login').type(username);
  cy.get('#senha').type(password);
  cy.get("form").within(() => {
    cy.get("button[type='submit']").click();
  });
});
