import { isValidInstagramId } from './Instagram';

describe('Instagram', () => {
  describe('isValidInstagramId', () => {
    it('validates real post urls', () => {
      expect(
        isValidInstagramId('https://www.instagram.com/p/CjTBnwju6XY/'),
      ).toBe(true);
      expect(isValidInstagramId('https://instagr.am/p/CjTBnwju6XY/')).toBe(
        true,
      );
      expect(isValidInstagramId('https://www.instagr.am/p/CjTBnwju6XY/')).toBe(
        true,
      );
      expect(
        isValidInstagramId('https://www.instagram.com/reel/CjTBnwju6XY/'),
      ).toBe(true);
    });
    it('fails for instagram profiles', () => {
      expect(isValidInstagramId('https://www.instagram.com/plonebr')).toBe(
        false,
      );
      expect(isValidInstagramId('https://instagr.am//plonebr')).toBe(false);
      expect(isValidInstagramId('https://www.instagr.am//plonebr')).toBe(false);
    });
  });
});
