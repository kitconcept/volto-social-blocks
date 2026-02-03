context('LinkedIn Block Acceptance Tests', () => {
  describe('LinkedIn Block Tests', () => {
    beforeEach(() => {
      cy.viewport('macbook-16');
      cy.createContent({
        contentType: 'Document',
        contentId: 'document',
        contentTitle: 'Test document',
      });
      cy.autologin();
    });

    it('As editor I can add a LinkedIn Block', function () {
      cy.visit('/document');
      cy.navigate('/document/edit');
      cy.getSlate().click();
      cy.get('.button .block-add-button').click({ force: true });
      cy.get('.blocks-chooser .social .button.linkedInBlock').click({
        force: true,
      });

      cy.get('.block.inner.linkedInBlock .input-wrapper input.social-blocks-input')
        .invoke(
          'val',
          'https://www.linkedin.com/posts/plone_plone-conference-2022-activity-6945674096819568640-YHCz',
        )
        .type('{enter}');

      cy.get('#toolbar-save').click();
    });
  });
});
