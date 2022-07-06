/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select DOM element by data-test attribute.
     * @example cy.getByDataTest('greeting')
     */
    getByDataTest(
      dataTestAttribute: string,
      args?: Partial<
        Cypress.Loggable &
          Cypress.Timeoutable &
          Cypress.Withinable &
          Cypress.Shadow
      >,
    ): Chainable<JQuery<HTMLElement>>;
  }
}
