context('Twitter Block Acceptance Tests', () => {
  describe('Twitter Block Tests', () => {
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

    it('As editor I can add a Twitter Block', function () {
      cy.visit('/document');
      cy.navigate('/document/edit');
      cy.getSlate().click();
      cy.get('.button .block-add-button').click({ force: true });
      cy.get('.blocks-chooser .social .button.tweetBlock').click({
        force: true,
      });

      cy.get('.block.inner.tweetBlock .input-wrapper .ui.input input').invoke('val', 'https://twitter.com/ploneconf/status/1542568225527005184').type('{enter}');

      cy.get('#toolbar-save').click();
    });
  });
});
