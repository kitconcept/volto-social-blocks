import { isValidPinterestUrl } from './Pinterest';

describe('Pinterest', () => {
  describe('isValidPinterestUrl', () => {
    it('validates full pin urls', () => {
      expect(
        isValidPinterestUrl('https://www.pinterest.com/pin/99360735500167749/'),
      ).toBe(true);
      expect(
        isValidPinterestUrl('https://pinterest.com/pin/99360735500167749/'),
      ).toBe(true);
      expect(
        isValidPinterestUrl('https://br.pinterest.com/pin/99360735500167749/'),
      ).toBe(true);
    });

    it('validates short pin.it urls', () => {
      expect(isValidPinterestUrl('https://pin.it/5bJQ4y9')).toBe(true);
      expect(isValidPinterestUrl('pin.it/5bJQ4y9')).toBe(true);
    });

    it('rejects non-pinterest urls', () => {
      expect(
        isValidPinterestUrl('https://example.com/pin/99360735500167749/'),
      ).toBe(false);
      expect(isValidPinterestUrl('not a url')).toBe(false);
    });

    it('rejects empty/undefined', () => {
      expect(isValidPinterestUrl('')).toBe(false);
      expect(isValidPinterestUrl()).toBe(false);
    });

    it('trims whitespace', () => {
      expect(
        isValidPinterestUrl(
          '  https://www.pinterest.com/pin/99360735500167749/  ',
        ),
      ).toBe(true);
    });
  });
});
