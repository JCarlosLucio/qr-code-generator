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

  it('Github link has the correct href', function () {
    cy.getByDataTest('github-link').should(
      'have.prop',
      'href',
      'https://github.com/JCarlosLucio/qr-code-generator',
    );
  });

  it('ColorModeToggle changes color theme', function () {
    expect(window.localStorage.getItem('color-mode')).to.eq('dark');
    cy.root().should('have.attr', 'data-theme', 'dark');
    cy.root().should('have.css', 'background-color', 'rgb(0, 0, 0)');
    cy.getByDataTest('color-mode-toggle')
      .click()
      .should(() => {
        expect(window.localStorage.getItem('color-mode')).to.eq('light');
      });
    cy.root().should('have.attr', 'data-theme', 'light');
    cy.root().should('have.css', 'background-color', 'rgb(255, 255, 255)');
  });

  it('Wifi Tab changes to Wifi form', function () {
    cy.getByDataTest('wifi-tab').click();
    cy.getByDataTest('ssid-input').should('exist');
    cy.getByDataTest('hidden-ssid-checkbox').should('exist');
    cy.getByDataTest('password-input').should('exist');
    cy.getByDataTest('none-radio-btn').should('exist');
    cy.getByDataTest('wpa-radio-btn').should('exist');
    cy.getByDataTest('wep-radio-btn').should('exist');
    cy.getByDataTest('generate-btn').should('exist');
    cy.getByDataTest('clear-btn').should('exist');
  });

  describe('URL QRCode', function () {
    beforeEach(function () {
      const urlInput = 'https://google.com';

      cy.getByDataTest('url-textarea').type(urlInput);
      cy.getByDataTest('generate-btn').click();
    });

    it('A URL QRCode can be created', function () {
      cy.getByDataTest('qrcode-img').should('exist');
      cy.getByDataTest('download-btn').should('exist');
      cy.getByDataTest('print-btn').should('exist');
      cy.getByDataTest('generate-btn').should('be.disabled');
    });

    it('Url qrcode and input can be cleared', function () {
      cy.getByDataTest('clear-btn').click();
      cy.getByDataTest('qrcode-img').should('not.exist');
      cy.getByDataTest('download-btn').should('not.exist');
      cy.getByDataTest('print-btn').should('not.exist');
      cy.getByDataTest('url-textarea').should('have.value', '');
      cy.getByDataTest('generate-btn').should('not.be.disabled');
    });

    it('URL QRCode can be printed', function () {
      cy.window().then((win) => {
        cy.stub(win, 'print').as('print');
      });

      cy.getByDataTest('print-btn').click();
      cy.get('@print').should('have.been.calledOnce');
    });
  });

  describe('WIFI QRCode', function () {
    beforeEach(function () {
      const ssidInput = 'TEST_NETWORK_NAME_2.4';
      const passwordInput = 'testpasswordinput1234';
      cy.getByDataTest('wifi-tab').click();
      cy.getByDataTest('ssid-input').type(ssidInput);
      cy.getByDataTest('password-input').type(passwordInput);
      cy.getByDataTest('generate-btn').click();
    });

    it('A WIFI QRCode can be created', function () {
      cy.getByDataTest('qrcode-img').should('exist');
      cy.getByDataTest('download-btn').should('exist');
      cy.getByDataTest('print-btn').should('exist');
      cy.getByDataTest('generate-btn').should('be.disabled');
    });

    it('WIFI QRcode and inputs can be cleared', function () {
      cy.getByDataTest('clear-btn').click();
      cy.getByDataTest('qrcode-img').should('not.exist');
      cy.getByDataTest('download-btn').should('not.exist');
      cy.getByDataTest('print-btn').should('not.exist');
      cy.getByDataTest('ssid-input').should('have.value', '');
      cy.getByDataTest('password-input').should('have.value', '');
      cy.getByDataTest('hidden-ssid-checkbox').should('not.be.checked');
      cy.getByDataTest('wpa-radio-btn').should('be.checked');
      cy.getByDataTest('generate-btn').should('not.be.disabled');
    });

    it('WIFI QRCode can be printed', function () {
      cy.window().then((win) => {
        cy.stub(win, 'print').as('print');
      });

      cy.getByDataTest('print-btn').click();
      cy.get('@print').should('have.been.calledOnce');
    });
  });
});
