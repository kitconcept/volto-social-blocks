context('Mastodon Block Acceptance Tests', () => {
  describe('Mastodon Block Tests', () => {
    beforeEach(() => {
      cy.viewport('macbook-16');
      cy.createContent({
        contentType: 'Document',
        contentId: 'document',
        contentTitle: 'Test document',
      });
      cy.autologin();
    });

    it('As editor I can add a Mastodon Block', function () {
      cy.visit('/document');
      cy.navigate('/document/edit');
      cy.getSlate().click();
      cy.get('.button .block-add-button').click({ force: true });
      cy.get('.blocks-chooser .social .button.mastodonBlock').click({
        force: true,
      });

      cy.get('.block.inner.mastodonBlock .input-wrapper input.social-blocks-input')
        .invoke(
          'val',
          'https://mastodon.social/@Gargron/109897515140097691',
        )
        .type('{enter}');

      cy.get('#toolbar-save').click();
    });
  });
});
