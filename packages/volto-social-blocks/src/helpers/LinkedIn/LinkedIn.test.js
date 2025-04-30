import { extractLinkedInPostURL, isValidLinkedInPostURL } from './LinkedIn';

describe('LinkedIn', () => {
  describe('extractLinkedInPostURL', () => {
    it('extracts post url', () => {
      expect(
        extractLinkedInPostURL(
          '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7318254492443979777?collapsed=1" height="399" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>',
        ),
      ).toEqual(
        'https://www.linkedin.com/embed/feed/update/urn:li:share:7318254492443979777',
      );
    });
    it('fails with invalid input', () => {
      expect(
        extractLinkedInPostURL(
          'https://www.linkedin.com/posts/plone-foundation_plone-plonehandson-i18n-activity-7318254493484179456-RRdZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAADO34BLJ2BzK5JhZsXmcTfGJY2-W4VRu8',
        ),
      ).toEqual(null);
      expect(
        extractLinkedInPostURL(
          'https://www.linkedin.com/company/plone-foundation/',
        ),
      ).toEqual(null);
    });
  });
  describe('isValidLinkedInPostURL', () => {
    it('validates post url', () => {
      expect(
        isValidLinkedInPostURL(
          'https://www.linkedin.com/embed/feed/update/urn:li:share:7318254492443979777',
        ),
      ).toBe(true);
    });
    it('validates post iframe', () => {
      expect(
        isValidLinkedInPostURL(
          '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7318254492443979777?collapsed=1" height="399" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>',
        ),
      ).toBe(true);
    });
    it('fails with invalid input', () => {
      expect(
        isValidLinkedInPostURL(
          'https://www.linkedin.com/company/plone-foundation/',
        ),
      ).toBe(false);
    });
  });
});
