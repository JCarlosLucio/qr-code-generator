describe('QRCODE GENERATOR APP', function () {
  beforeEach(function () {
    cy.visit('/');
  });

  it('Inital Form is shown', function () {
    cy.contains('QRCODE GENERATOR');
    cy.getByDataTest('url-tab').should('exist');
    cy.getByDataTest('wifi-tab').should('exist');
    cy.getByDataTest('github-link').should('exist');
    cy.getByDataTest('color-mode-toggle').should('exist');
    cy.getByDataTest('generate-btn').should('exist');
    cy.getByDataTest('clear-btn').should('exist');
  });
});
