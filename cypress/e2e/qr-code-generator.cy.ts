describe('QRCODE GENERATOR APP', () => {
  beforeEach(function () {
    cy.visit('/');
  });

  it('Inital Url form is shown', () => {
    cy.contains('QRCODE GENERATOR');
  });
});
