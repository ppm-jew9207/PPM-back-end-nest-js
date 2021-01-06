describe('shared-list-editor: SharedListEditor component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=sharedlisteditor--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to shared-list-editor!');
    });
});
