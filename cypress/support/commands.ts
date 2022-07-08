import * as path from 'path';
// ***********************************************
// This example commands.ts shows you how to
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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// Types declaration for custom commands -- can be moved into an external declaration (*.d.ts) file. Ex. cypress.d.ts
// Please read more here: https://docs.cypress.io/guides/tooling/typescript-support#Using-an-External-Typings-File
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add('getByDataTest', (selector, ...args) => {
  return cy.get(`[data-test=${selector}]`, ...args);
});

Cypress.Commands.add('validateImage', (downloadedFilename) => {
  const downloadsFolder = Cypress.config('downloadsFolder');

  downloadedFilename = path.join(downloadsFolder, downloadedFilename);

  // ensure the file has been saved before trying to parse it
  cy.readFile(downloadedFilename, 'binary', { timeout: 15000 }).should(
    (buffer) => {
      // by having length assertion we ensure the file has text
      // since we don't know when the browser finishes writing it to disk

      // Tip: use expect() form to avoid dumping binary contents
      // of the buffer into the Command Log
      expect(buffer.length).to.be.gt(1000);
    },
  );
});
