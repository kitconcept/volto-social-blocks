import { isValidTikTokUrl } from './TikTok';

describe('TikTok', () => {
  describe('isValidTikTokUrl', () => {
    it('validates user video urls', () => {
      expect(
        isValidTikTokUrl('https://www.tiktok.com/@scout2015/video/6718335390845095173'),
      ).toBe(true);
      expect(
        isValidTikTokUrl('https://m.tiktok.com/@scout2015/video/6718335390845095173'),
      ).toBe(true);
    });

    it('validates short vm/vt urls', () => {
      expect(isValidTikTokUrl('https://vm.tiktok.com/ZM1234567/')).toBe(true);
      expect(isValidTikTokUrl('https://vt.tiktok.com/ZM1234567/')).toBe(true);
    });

    it('validates tiktok /t/ urls', () => {
      expect(isValidTikTokUrl('https://www.tiktok.com/t/ZM1234567/')).toBe(true);
    });

    it('rejects non-tiktok urls', () => {
      expect(isValidTikTokUrl('https://example.com/@scout2015/video/6718335390845095173')).toBe(false);
      expect(isValidTikTokUrl('not a url')).toBe(false);
    });

    it('rejects empty/undefined', () => {
      expect(isValidTikTokUrl('')).toBe(false);
      expect(isValidTikTokUrl()).toBe(false);
    });

    it('trims whitespace', () => {
      expect(
        isValidTikTokUrl('  https://www.tiktok.com/@scout2015/video/6718335390845095173  '),
      ).toBe(true);
    });
  });
});
