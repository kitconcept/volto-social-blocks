context('TikTok Block Acceptance Tests', () => {
  describe('TikTok Block Tests', () => {
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

    it('As editor I can add a TikTok Block', function () {
      cy.visit('/document');
      cy.navigate('/document/edit');
      cy.getSlate().click();
      cy.get('.button .block-add-button').click({ force: true });
      cy.get('.blocks-chooser .social .button.tiktokBlock').click({
        force: true,
      });

      cy.get('.block.inner.tiktokBlock .input-wrapper input.social-blocks-input')
        .invoke('val', 'https://www.tiktok.com/@scout2015/video/6718335390845095173')
        .type('{enter}');

      cy.get('#toolbar-save').click();
    });
  });
});
