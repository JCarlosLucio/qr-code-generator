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

  describe('A URL QRCode can be created ', function () {
    beforeEach(function () {
      const urlInput = 'https://google.com';
      cy.wrap(urlInput).as('urlInput');
    });

    it('Url qrcode is created from a valid url', function () {
      const generateBtnSelector = 'generate-btn';

      cy.getByDataTest('url-textarea')
        .type(this.urlInput)
        .should('have.value', this.urlInput);
      cy.getByDataTest(generateBtnSelector).click();
      cy.getByDataTest('qrcode-img').should('exist');
      cy.getByDataTest('download-btn').should('exist');
      cy.getByDataTest('print-btn').should('exist');
      cy.getByDataTest(generateBtnSelector).should('be.disabled');
    });
  });
});
