import { isValidFacebookId } from './Facebook';

describe('Instagram', () => {
  describe('isValidFacebookId', () => {
    it('validates real post urls', () => {
      expect(
        isValidFacebookId(
          'https://m.facebook.com/story.php?story_fbid=pfbid08AKg1aseCjJek1nrRL8hXRCFe6v645pJt15as4Vm1YG2MjoGkFZ1biA6hmHX6qfql&id=100067147516508&sfnsn=wiwspmo&mibextid=RUbZ1f',
        ),
      ).toBe(true);
      expect(
        isValidFacebookId(
          'https://www.facebook.com/photo/?fbid=529862562613664&set=a.428837142716207',
        ),
      ).toBe(true);
      expect(
        isValidFacebookId(
          'https://www.facebook.com/photo/?fbid=505633655018214',
        ),
      ).toBe(true);
      expect(isValidFacebookId('https://fb.watch/bfP8U3LBa6/')).toBe(true);
    });
  });
});
