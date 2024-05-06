describe('Visual Validation of the Login Page', () => {
    it('should visually validate the login page with Applitools', () => {
      cy.visit('/login');
      cy.eyesOpen({
        appName: 'Node Application',
        testName: 'Login Page Visual Test',
        browser: { width: 1024, height: 768 }
      });
      cy.eyesCheckWindow('Login Page View');
      cy.eyesClose();
    });
  });
