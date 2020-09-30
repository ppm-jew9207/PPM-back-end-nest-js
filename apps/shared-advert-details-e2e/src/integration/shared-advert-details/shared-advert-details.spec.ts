describe('shared-advert-details: SharedAdvertDetails component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=sharedadvertdetails--primary&knob-learnItems&knob-preRequisites='));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to shared-advert-details!');
    });
});
