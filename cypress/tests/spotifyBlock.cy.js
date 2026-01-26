context('Spotify Block Acceptance Tests', () => {
  describe('Spotify Block Tests', () => {
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

    it('As editor I can add an Spotify Block', function () {
      cy.visit('/document');
      cy.navigate('/document/edit');
      cy.getSlate().click();

      cy.get('.button .block-add-button').click({ force: true });
      cy.get('.blocks-chooser .social .button.spotifyBlock').click({
        force: true,
      });

      cy.get('.block.inner.spotifyBlock .input-wrapper input.social-blocks-input').invoke('val', 'https://open.spotify.com/track/1Oq3hZjG2WWIR2MEqASnNd?si=058451374c214af9').type('{enter}');

      cy.get('#toolbar-save').click();
    });
  });
});
