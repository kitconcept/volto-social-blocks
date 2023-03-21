context('Flickr Block Acceptance Tests', () => {
  describe('Flickr Block Tests', () => {
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

    it('As editor I can add a Flickr Block', function () {
      cy.intercept('PATCH', '/**/document').as('edit');
      cy.intercept('GET', '/**/document').as('content');
      cy.intercept('GET', '/**/Document').as('schema');

      cy.getSlate().click();
      cy.get('.button .block-add-button').click({ force: true });
      cy.get('.blocks-chooser .social .button.flickrBlock').click({
        force: true,
      });

      cy.get('.block.inner.flickrBlock .input-wrapper .ui.input input')
        .invoke(
          'val',
          '<a data-flickr-embed="true" data-header="true" data-footer="true" data-context="true" href="https://www.flickr.com/photos/dlr_de/52662573389/" title="Blick auf den Bergrücken"><img src="https://live.staticflickr.com/65535/52662573389_f2bf43ea74.jpg" width="500" height="281" alt="Blick auf den Bergrücken"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>',
        )
        .type('{enter}');

      cy.get('#toolbar-save').click();
    });
  });
});
