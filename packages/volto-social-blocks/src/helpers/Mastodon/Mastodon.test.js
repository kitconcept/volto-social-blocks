import {
  isValidMastodonUrl,
  extractMastodonEmbedUrl,
  extractMastodonScriptUrl,
} from './Mastodon';

describe('Mastodon', () => {
  describe('isValidMastodonUrl', () => {
    it('validates Mastodon post urls', () => {
      expect(
        isValidMastodonUrl(
          'https://mastodon.social/@Gargron/109897515140097691',
        ),
      ).toBe(true);
    });

    it('validates Mastodon urls from different instances', () => {
      expect(
        isValidMastodonUrl('https://fosstodon.org/@kev/109897515140097691'),
      ).toBe(true);
    });

    it('validates Mastodon embed code', () => {
      expect(
        isValidMastodonUrl(
          '<iframe class="mastodon-embed" src="https://mastodon.social/@Gargron/109897515140097691/embed"></iframe>',
        ),
      ).toBe(true);
    });

    it('rejects non-Mastodon urls', () => {
      expect(isValidMastodonUrl('https://twitter.com/user/status/123')).toBe(
        false,
      );
      expect(isValidMastodonUrl('not a url')).toBe(false);
    });

    it('rejects empty/undefined', () => {
      expect(isValidMastodonUrl('')).toBe(false);
      expect(isValidMastodonUrl()).toBe(false);
    });
  });

  describe('extractMastodonEmbedUrl', () => {
    it('converts Mastodon url to embed url', () => {
      expect(
        extractMastodonEmbedUrl(
          'https://mastodon.social/@Gargron/109897515140097691',
        ),
      ).toBe('https://mastodon.social/@Gargron/109897515140097691/embed');
    });

    it('extracts embed url from iframe', () => {
      expect(
        extractMastodonEmbedUrl(
          '<iframe src="https://mastodon.social/@Gargron/109897515140097691/embed"></iframe>',
        ),
      ).toBe('https://mastodon.social/@Gargron/109897515140097691/embed');
    });

    it('returns null for invalid input', () => {
      expect(extractMastodonEmbedUrl('https://example.com')).toBe(null);
      expect(extractMastodonEmbedUrl('')).toBe(null);
    });
  });

  describe('extractMastodonScriptUrl', () => {
    it('extracts script url from embed code', () => {
      expect(
        extractMastodonScriptUrl(
          '<script src="https://mastodon.social/embed.js"></script>',
        ),
      ).toBe('https://mastodon.social/embed.js');
    });

    it('generates script url from post url', () => {
      expect(
        extractMastodonScriptUrl(
          'https://mastodon.social/@Gargron/109897515140097691',
        ),
      ).toBe('https://mastodon.social/embed.js');
    });

    it('returns null for invalid input', () => {
      expect(extractMastodonScriptUrl('')).toBe(null);
    });
  });
});
