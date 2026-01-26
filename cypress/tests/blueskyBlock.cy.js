context('Bluesky Block Acceptance Tests', () => {
  describe('Bluesky Block Tests', () => {
    beforeEach(() => {
      cy.viewport('macbook-16');
      cy.createContent({
        contentType: 'Document',
        contentId: 'document',
        contentTitle: 'Test document',
      });
      cy.autologin();
    });

    it('As editor I can add a Bluesky Block', function () {
      cy.visit('/document');
      cy.navigate('/document/edit');
      cy.getSlate().click();
      cy.get('.button .block-add-button').click({ force: true });
      cy.get('.blocks-chooser .social .button.blueskyBlock').click({
        force: true,
      });

      cy.get('.block.inner.blueskyBlock .input-wrapper .ui.input input')
        .invoke(
          'val',
          'https://bsky.app/profile/lindalebrun.bsky.social/post/3mcsfdj5i6224',
        )
        .type('{enter}');

      cy.get('#toolbar-save').click();
    });
  });
});
