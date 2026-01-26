context('Instagram Block Acceptance Tests', () => {
  describe('Instagram Block Tests', () => {
    beforeEach(() => {
      // Given a logged in editor
      cy.viewport('macbook-16');
      cy.createContent({
        contentType: 'Document',
        contentId: 'document',
        contentTitle: 'Test document',
      });
      cy.autologin();
    });

    it('As editor I can add an Instagram Block', function () {
      cy.visit('/document');
      cy.navigate('/document/edit');
      cy.getSlate().click();
      cy.get('.button .block-add-button').click({ force: true });
      cy.get('.blocks-chooser .social .button.instagramBlock').click({
        force: true,
      });

      cy.get('.block.inner.instagramBlock .input-wrapper input.social-blocks-input').invoke('val', 'https://www.instagr.am/p/CjTBnwju6XY/').type('{enter}');

      cy.get('#toolbar-save').click();
    });
  });
});
