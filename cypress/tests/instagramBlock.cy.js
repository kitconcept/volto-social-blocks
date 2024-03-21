context('Instagram Block Acceptance Tests', () => {
  describe('Instagram Block Tests', () => {
    beforeEach(() => {
      // given a logged in editor and a page in edit mode
      cy.visit('/');
      cy.autologin();
      cy.createContent({
        contentType: 'Document',
        contentId: 'document',
        contentTitle: 'Test document',
      });
      cy.createContent({
        contentType: 'Document',
        contentId: 'my-page',
        contentTitle: 'My Page',
        path: '/document',
      });
      cy.visit('/document');
      cy.waitForResourceToLoad('document');
      cy.navigate('/document/edit');
    });

    it('As editor I can add an Instagram Block', function () {
      cy.intercept('PATCH', '/**/document').as('edit');
      cy.intercept('GET', '/**/document').as('content');
      cy.intercept('GET', '/**/Document').as('schema');

      cy.getSlate().click();
      cy.get('.button .block-add-button').click({ force: true });
      cy.get('.blocks-chooser .social .button.instagramBlock').click({
        force: true,
      });

      cy.get('.block.inner.instagramBlock .input-wrapper .ui.input input').invoke('val', 'https://www.instagr.am/p/CjTBnwju6XY/').type('{enter}');

      cy.get('#toolbar-save').click();
    });
  });
});
