import { isValidThreadsUrl } from './Threads';

describe('Threads', () => {
  describe('isValidThreadsUrl', () => {
    it('validates Threads post urls', () => {
      expect(
        isValidThreadsUrl('https://www.threads.com/@zuck/post/C8V8NIxyJy0'),
      ).toBe(true);
    });

    it('validates Threads urls without www', () => {
      expect(
        isValidThreadsUrl('https://threads.com/@zuck/post/C8V8NIxyJy0'),
      ).toBe(true);
    });

    it('validates Threads urls with dots in username', () => {
      expect(
        isValidThreadsUrl(
          'https://www.threads.com/@user.name/post/C8V8NIxyJy0',
        ),
      ).toBe(true);
    });

    it('rejects non-Threads urls', () => {
      expect(isValidThreadsUrl('https://twitter.com/user/status/123')).toBe(
        false,
      );
      expect(isValidThreadsUrl('not a url')).toBe(false);
    });

    it('rejects invalid Threads url patterns', () => {
      expect(isValidThreadsUrl('https://www.threads.com/post/123')).toBe(false);
      expect(isValidThreadsUrl('https://www.threads.com/@user')).toBe(false);
    });

    it('rejects empty/undefined', () => {
      expect(isValidThreadsUrl('')).toBe(false);
      expect(isValidThreadsUrl()).toBe(false);
    });

    it('trims whitespace', () => {
      expect(
        isValidThreadsUrl('  https://www.threads.com/@zuck/post/C8V8NIxyJy0  '),
      ).toBe(true);
    });
  });
});
