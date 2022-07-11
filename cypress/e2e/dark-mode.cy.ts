describe('DARK MODE', function () {
  describe('Prefers color scheme dark', function () {
    beforeEach(function () {
      cy.visitPrefersDarkMode(true);
    });

    it('ColorModeToggle changes color theme from dark to light', function () {
      const initialColorMode = 'dark';
      const initialColor = 'rgb(0, 0, 0)';
      const finalColorMode = 'light';
      const finalColor = 'rgb(255, 255, 255)';
      cy.getByDataTest('color-mode-toggle').should('be.visible');
      cy.getLocalStorage('color-mode').should('eq', initialColorMode);
      cy.root().should('have.attr', 'data-theme', initialColorMode);
      cy.root().should('have.css', 'background-color', initialColor);
      cy.getByDataTest('color-mode-toggle').click();
      cy.getLocalStorage('color-mode').should('eq', finalColorMode);
      cy.root().should('have.attr', 'data-theme', finalColorMode);
      cy.root().should('have.css', 'background-color', finalColor);
    });
  });

  describe('Prefers color scheme light', function () {
    beforeEach(function () {
      cy.visitPrefersDarkMode(false);
    });

    it('ColorModeToggle changes color theme from light to dark', function () {
      const initialColorMode = 'light';
      const initialColor = 'rgb(255, 255, 255)';
      const finalColorMode = 'dark';
      const finalColor = 'rgb(0, 0, 0)';
      cy.getByDataTest('color-mode-toggle').should('be.visible');
      cy.getLocalStorage('color-mode').should('eq', initialColorMode);
      cy.root().should('have.attr', 'data-theme', initialColorMode);
      cy.root().should('have.css', 'background-color', initialColor);
      cy.getByDataTest('color-mode-toggle').click();
      cy.getLocalStorage('color-mode').should('eq', finalColorMode);
      cy.root().should('have.attr', 'data-theme', finalColorMode);
      cy.root().should('have.css', 'background-color', finalColor);
    });
  });
});
