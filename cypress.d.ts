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

    /**
     * Custom command to get Local Storage
     * @example cy.getLocalStorage('token').should('eq', 'abc123')
     */
    getLocalStorage(key: string): Chainable<JQuery<HTMLElement>>;

    /**
     * Custom command to validate a downloaded
     * @example cy.validateImage('logo.png')
     */
    validateImage(
      downloadedFilename: string,
      args?: Partial<
        Cypress.Loggable &
          Cypress.Timeoutable &
          Cypress.Withinable &
          Cypress.Shadow
      >,
    ): Chainable<JQuery<HTMLElement>>;

    /**
     * Custom command to set prefers-color-scheme media query
     * @example cy.prefersDarkMode(true)
     */
    prefersDarkMode(value: boolean): Chainable<JQuery<HTMLElement>>;
  }
}
