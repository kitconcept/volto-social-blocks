context('Flickr Block Acceptance Tests', () => {
  describe('Flickr Block Tests', () => {
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

    it('As editor I can add a Flickr Block', function () {
      cy.visit('/document');
      cy.navigate('/document/edit');
      cy.getSlate().click();
      cy.get('.button .block-add-button').click({ force: true });
      cy.get('.blocks-chooser .social .button.flickrBlock').click({
        force: true,
      });

      cy.get('.block.inner.flickrBlock .input-wrapper .ui.input input').invoke('val', '<a data-flickr-embed="true" data-header="true" data-footer="true" href="https://www.flickr.com/photos/plone-foundation/albums/72177720303069181" title="Plone Conference 2022 Namur"><img src="https://live.staticflickr.com/65535/52443622430_c442b75502.jpg" width="500" height="375" alt="Plone Conference 2022 Namur"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>').type('{enter}');

      cy.get('#toolbar-save').click();
    });
  });
});
