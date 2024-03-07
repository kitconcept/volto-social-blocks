context('Spotify Block Acceptance Tests', () => {
  describe('Spotify Block Tests', () => {
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
      cy.waitForResourceToLoad('@navigation');
      cy.waitForResourceToLoad('@breadcrumbs');
      cy.waitForResourceToLoad('@actions');
      cy.waitForResourceToLoad('@types');
      cy.waitForResourceToLoad('document');
      cy.navigate('/document/edit');
    });

    it('As editor I can add an Spotify Block', function () {
      cy.intercept('PATCH', '/**/document').as('edit');
      cy.intercept('GET', '/**/document').as('content');
      cy.intercept('GET', '/**/Document').as('schema');

      cy.getSlate().click();
      cy.get('.button .block-add-button').click({ force: true });
      cy.get('.blocks-chooser .social .button.spotifyBlock').click({
        force: true,
      });

      cy.get('.block.inner.spotifyBlock .input-wrapper .ui.input input')
        .invoke(
          'val',
          'https://open.spotify.com/track/1Oq3hZjG2WWIR2MEqASnNd?si=058451374c214af9',
        )
        .type('{enter}');

      cy.get('#toolbar-save').click();
    });
  });
});
