import { isValidAppleMusicUrl, extractAppleMusicEmbedUrl } from './AppleMusic';

describe('AppleMusic', () => {
  describe('isValidAppleMusicUrl', () => {
    it('validates Apple Music album urls', () => {
      expect(
        isValidAppleMusicUrl(
          'https://music.apple.com/us/album/nevermind/1440783617',
        ),
      ).toBe(true);
    });

    it('validates Apple Music song urls', () => {
      expect(
        isValidAppleMusicUrl(
          'https://music.apple.com/us/album/smells-like-teen-spirit/1440783617?i=1440783844',
        ),
      ).toBe(true);
    });

    it('validates Apple Podcasts urls', () => {
      expect(
        isValidAppleMusicUrl(
          'https://podcasts.apple.com/us/podcast/the-daily/id1200361736',
        ),
      ).toBe(true);
    });

    it('rejects non-Apple Music urls', () => {
      expect(isValidAppleMusicUrl('https://spotify.com/track/123')).toBe(false);
      expect(isValidAppleMusicUrl('not a url')).toBe(false);
    });

    it('rejects empty/undefined', () => {
      expect(isValidAppleMusicUrl('')).toBe(false);
      expect(isValidAppleMusicUrl()).toBe(false);
    });
  });

  describe('extractAppleMusicEmbedUrl', () => {
    it('converts Apple Music url to embed url', () => {
      expect(
        extractAppleMusicEmbedUrl(
          'https://music.apple.com/us/album/nevermind/1440783617',
        ),
      ).toBe('https://embed.music.apple.com/us/album/nevermind/1440783617');
    });

    it('converts Apple Podcasts url to embed url', () => {
      expect(
        extractAppleMusicEmbedUrl(
          'https://podcasts.apple.com/us/podcast/the-daily/id1200361736',
        ),
      ).toBe(
        'https://embed.podcasts.apple.com/us/podcast/the-daily/id1200361736',
      );
    });

    it('returns null for invalid urls', () => {
      expect(extractAppleMusicEmbedUrl('https://example.com')).toBe(null);
      expect(extractAppleMusicEmbedUrl('')).toBe(null);
    });
  });
});
