import { isValidBlueskyUrl } from './Bluesky';

describe('Bluesky', () => {
  describe('isValidBlueskyUrl', () => {
    it('validates bsky.app post urls', () => {
      expect(
        isValidBlueskyUrl(
          'https://bsky.app/profile/lindalebrun.bsky.social/post/3mcsfdj5i6224',
        ),
      ).toBe(true);
      expect(
        isValidBlueskyUrl(
          'https://bsky.app/profile/did:plc:xsonm4pxopcdtr4jqpc6wsal/post/3mcsfdj5i6224',
        ),
      ).toBe(true);
    });

    it('rejects non-bluesky urls', () => {
      expect(isValidBlueskyUrl('https://example.com/profile/x/post/y')).toBe(
        false,
      );
      expect(isValidBlueskyUrl('not a url')).toBe(false);
    });

    it('rejects empty/undefined', () => {
      expect(isValidBlueskyUrl('')).toBe(false);
      expect(isValidBlueskyUrl()).toBe(false);
    });

    it('trims whitespace', () => {
      expect(
        isValidBlueskyUrl(
          '  https://bsky.app/profile/lindalebrun.bsky.social/post/3mcsfdj5i6224  ',
        ),
      ).toBe(true);
    });
  });
});
