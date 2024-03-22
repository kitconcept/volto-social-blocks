import { extractSoundCloudId, isValidSoundcloudId } from './Soundcloud';

const validIframe = '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/472694601&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/relaxing-white-noise" title="Relaxing White Noise" target="_blank" style="color: #cccccc; text-decoration: none;">Relaxing White Noise</a> · <a href="https://soundcloud.com/relaxing-white-noise/perfect-rain-sounds-for-sleep" title="Perfect Rain Sounds for Sleep or Studying (75 Minutes)" target="_blank" style="color: #cccccc; text-decoration: none;">Perfect Rain Sounds for Sleep or Studying (75 Minutes)</a></div>';

describe('Soundcloud', () => {
  describe('extractSoundCloudId', () => {
    it('extracts soundcloud id from a valid iframe', () => {
      expect(extractSoundCloudId(validIframe)).toBe('https://api.soundcloud.com/tracks/472694601&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true');
    });
    it('fails if not the iframe', () => {
      expect(extractSoundCloudId('<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://plone.org"></iframe>')).toBe('');
    });
  });
  describe('isValidSoundcloudId', () => {
    it('validates track id', () => {
      expect(isValidSoundcloudId('https://api.soundcloud.com/tracks/472694601&color=#ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true')).toBe(true);
    });
    it('fails if not the correct id', () => {
      expect(isValidSoundcloudId('https://open.spotify.com/episode/0EPE3mFCbNUunN3PFUv1lT?si=1ef7ad30c07744c4')).toBe(false);
    });
  });
});
