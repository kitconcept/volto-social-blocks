context('Soundcloud Block Acceptance Tests', () => {
  const validIframe = '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/472694601&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/relaxing-white-noise" title="Relaxing White Noise" target="_blank" style="color: #cccccc; text-decoration: none;">Relaxing White Noise</a> · <a href="https://soundcloud.com/relaxing-white-noise/perfect-rain-sounds-for-sleep" title="Perfect Rain Sounds for Sleep or Studying (75 Minutes)" target="_blank" style="color: #cccccc; text-decoration: none;">Perfect Rain Sounds for Sleep or Studying (75 Minutes)</a></div>';

  describe('Soundcloud Block Tests', () => {
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

    it('As editor I can add an Soundcloud Block', function () {
      cy.visit('/document');
      cy.navigate('/document/edit');
      cy.getSlate().click();

      cy.get('.button .block-add-button').click({ force: true });
      cy.get('.blocks-chooser .social .button.soundcloudBlock').click({
        force: true,
      });

      cy.get('.block.inner.soundcloudBlock .input-wrapper .ui.input input').invoke('val', validIframe).type('{enter}');

      cy.get('#toolbar-save').click();
    });
  });
});
