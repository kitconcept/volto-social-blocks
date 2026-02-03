context('Apple Music Block Acceptance Tests', () => {
  describe('Apple Music Block Tests', () => {
    beforeEach(() => {
      cy.viewport('macbook-16');
      cy.createContent({
        contentType: 'Document',
        contentId: 'document',
        contentTitle: 'Test document',
      });
      cy.autologin();
    });

    it('As editor I can add an Apple Music Block', function () {
      cy.visit('/document');
      cy.navigate('/document/edit');
      cy.getSlate().click();
      cy.get('.button .block-add-button').click({ force: true });
      cy.get('.blocks-chooser .social .button.appleMusicBlock').click({
        force: true,
      });

      cy.get('.block.inner.appleMusicBlock .input-wrapper input.social-blocks-input')
        .invoke(
          'val',
          'https://music.apple.com/us/album/nevermind/1440783617',
        )
        .type('{enter}');

      cy.get('#toolbar-save').click();
    });
  });
});
