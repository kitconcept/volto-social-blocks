context('Pinterest Block Acceptance Tests', () => {
  describe('Pinterest Block Tests', () => {
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

    it('As editor I can add a Pinterest Block', function () {
      cy.visit('/document');
      cy.navigate('/document/edit');
      cy.getSlate().click();
      cy.get('.button .block-add-button').click({ force: true });
      cy.get('.blocks-chooser .social .button.pinterestBlock').click({
        force: true,
      });

      cy.get('.block.inner.pinterestBlock .input-wrapper .ui.input input')
        .invoke('val', 'https://www.pinterest.com/pin/99360735500167749/')
        .type('{enter}');

      cy.get('#toolbar-save').click();
    });
  });
});
