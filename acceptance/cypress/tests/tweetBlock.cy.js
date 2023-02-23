context('Twitter Block Acceptance Tests', () => {
  describe('Twitter Block Tests', () => {
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

    it('As editor I can add a Twitter Block', function () {
      cy.intercept('PATCH', '/**/document').as('edit');
      cy.intercept('GET', '/**/document').as('content');
      cy.intercept('GET', '/**/Document').as('schema');

      cy.getSlate().click();
      cy.get('.button .block-add-button').click({ force: true });
      cy.get('.blocks-chooser .social .button.tweetBlock').click({ force: true });

      cy.get('.block.inner.tweetBlock .input-wrapper .ui.input input')
        .invoke('val', 'https://twitter.com/ploneconf/status/1542568225527005184')
        .type('{enter}');

      cy.get('#toolbar-save').click();
    });

  });
});
