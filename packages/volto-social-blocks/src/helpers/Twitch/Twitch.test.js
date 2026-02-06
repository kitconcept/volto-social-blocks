import {
  isValidTwitchUrl,
  extractTwitchEmbedInfo,
  buildTwitchEmbedUrl,
} from './Twitch';

describe('Twitch', () => {
  describe('isValidTwitchUrl', () => {
    it('validates Twitch channel urls', () => {
      expect(isValidTwitchUrl('https://www.twitch.tv/shroud')).toBe(true);
      expect(isValidTwitchUrl('https://twitch.tv/shroud')).toBe(true);
    });

    it('validates Twitch video urls', () => {
      expect(isValidTwitchUrl('https://www.twitch.tv/videos/1234567890')).toBe(
        true,
      );
    });

    it('validates Twitch clip urls', () => {
      expect(
        isValidTwitchUrl(
          'https://www.twitch.tv/shroud/clip/AwkwardHelplessSalamanderSwiftRage',
        ),
      ).toBe(true);
    });

    it('rejects non-Twitch urls', () => {
      expect(isValidTwitchUrl('https://youtube.com/watch?v=123')).toBe(false);
      expect(isValidTwitchUrl('not a url')).toBe(false);
    });

    it('rejects empty/undefined', () => {
      expect(isValidTwitchUrl('')).toBe(false);
      expect(isValidTwitchUrl()).toBe(false);
    });
  });

  describe('extractTwitchEmbedInfo', () => {
    it('extracts channel info', () => {
      expect(extractTwitchEmbedInfo('https://www.twitch.tv/shroud')).toEqual({
        type: 'channel',
        id: 'shroud',
      });
    });

    it('extracts video info', () => {
      expect(
        extractTwitchEmbedInfo('https://www.twitch.tv/videos/1234567890'),
      ).toEqual({
        type: 'video',
        id: '1234567890',
      });
    });

    it('extracts clip info', () => {
      expect(
        extractTwitchEmbedInfo(
          'https://www.twitch.tv/shroud/clip/AwkwardHelplessSalamanderSwiftRage',
        ),
      ).toEqual({
        type: 'clip',
        id: 'AwkwardHelplessSalamanderSwiftRage',
      });
    });

    it('returns null for invalid urls', () => {
      expect(extractTwitchEmbedInfo('https://example.com')).toEqual({
        type: null,
        id: null,
      });
    });
  });

  describe('buildTwitchEmbedUrl', () => {
    it('builds channel embed url', () => {
      expect(
        buildTwitchEmbedUrl('https://www.twitch.tv/shroud', 'localhost'),
      ).toBe('https://player.twitch.tv/?channel=shroud&parent=localhost');
    });

    it('builds video embed url', () => {
      expect(
        buildTwitchEmbedUrl(
          'https://www.twitch.tv/videos/1234567890',
          'localhost',
        ),
      ).toBe('https://player.twitch.tv/?video=1234567890&parent=localhost');
    });

    it('builds clip embed url', () => {
      expect(
        buildTwitchEmbedUrl(
          'https://www.twitch.tv/shroud/clip/AwkwardHelplessSalamanderSwiftRage',
          'localhost',
        ),
      ).toBe(
        'https://player.twitch.tv/?clip=AwkwardHelplessSalamanderSwiftRage&parent=localhost',
      );
    });

    it('uses localhost as default parent when window is available', () => {
      const result = buildTwitchEmbedUrl('https://www.twitch.tv/shroud');
      // In test environment, window.location.hostname is 'localhost'
      expect(result).toContain('parent=localhost');
    });

    it('returns null for invalid urls', () => {
      expect(buildTwitchEmbedUrl('https://example.com', 'localhost')).toBe(
        null,
      );
    });
  });
});
