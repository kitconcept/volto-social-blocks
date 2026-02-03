context('Twitch Block Acceptance Tests', () => {
  describe('Twitch Block Tests', () => {
    beforeEach(() => {
      cy.viewport('macbook-16');
      cy.createContent({
        contentType: 'Document',
        contentId: 'document',
        contentTitle: 'Test document',
      });
      cy.autologin();
    });

    it('As editor I can add a Twitch Block', function () {
      cy.visit('/document');
      cy.navigate('/document/edit');
      cy.getSlate().click();
      cy.get('.button .block-add-button').click({ force: true });
      cy.get('.blocks-chooser .social .button.twitchBlock').click({
        force: true,
      });

      cy.get('.block.inner.twitchBlock .input-wrapper input.social-blocks-input')
        .invoke(
          'val',
          'https://www.twitch.tv/videos/1234567890',
        )
        .type('{enter}');

      cy.get('#toolbar-save').click();
    });
  });
});
