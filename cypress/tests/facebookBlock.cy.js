context('Facebook Block Acceptance Tests', () => {
  describe('Facebook Block Tests', () => {
    beforeEach(() => {
      // given a logged in editor and a page in edit mode
      cy.visit('/');
      cy.viewport('macbook-16');
      cy.createContent({
        contentType: 'Document',
        contentId: 'document',
        contentTitle: 'Test document',
      });
      cy.autologin();
    });

    it('As editor I can add a Facebook Block', function () {
      cy.navigate('/document/edit');
      cy.getSlate().click();
      cy.get('.button .block-add-button').click({ force: true });
      cy.get('.blocks-chooser .social .button.facebookBlock').click({
        force: true,
      });

      cy.get('.block.inner.facebookBlock .input-wrapper .ui.input input').invoke('val', 'https://www.facebook.com/photo/?fbid=529862562613664&set=a.428837142716207').type('{enter}');

      cy.get('#toolbar-save').click();
    });
  });
});
