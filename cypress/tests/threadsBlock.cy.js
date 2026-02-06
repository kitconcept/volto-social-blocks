context('Threads Block Acceptance Tests', () => {
  describe('Threads Block Tests', () => {
    beforeEach(() => {
      cy.viewport('macbook-16');
      cy.createContent({
        contentType: 'Document',
        contentId: 'document',
        contentTitle: 'Test document',
      });
      cy.autologin();
    });

    it('As editor I can add a Threads Block', function () {
      cy.visit('/document');
      cy.navigate('/document/edit');
      cy.getSlate().click();
      cy.get('.button .block-add-button').click({ force: true });
      cy.get('.blocks-chooser .social .button.threadsBlock').click({
        force: true,
      });

      cy.get('.block.inner.threadsBlock .input-wrapper input.social-blocks-input')
        .invoke(
          'val',
          'https://www.threads.com/@zuck/post/C8V8NIxyJy0',
        )
        .type('{enter}');

      cy.get('#toolbar-save').click();
    });
  });
});
