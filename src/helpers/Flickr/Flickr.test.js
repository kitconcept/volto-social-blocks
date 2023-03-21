import { isValidFlickrId } from './Flickr';

describe('FLickr', () => {
  describe('isValidFlickrId', () => {
    it('validates input', () => {
      expect(
        isValidFlickrId(
          '<a data-flickr-embed="true" data-header="true" data-footer="true" href="https://www.flickr.com/photos/plone-foundation/albums/72177720303069181" title="Plone Conference 2022 Namur"><img src="https://live.staticflickr.com/65535/52443622430_c442b75502.jpg" width="500" height="375" alt="Plone Conference 2022 Namur"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>',
        ),
      ).toBe(true);
    });
    it('fails with invalid input', () => {
      expect(
        isValidFlickrId(
          '<a data-flickr-embed="true" data-header="true" data-footer="true" href="https://www.flickr.com/plone-foundation/albums/72177720303069181" title="Plone Conference 2022 Namur"><img src="https://staticflickr.com/65535/52443622430_c442b75502.jpg" width="500" height="375" alt="Plone Conference 2022 Namur"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>',
        ),
      ).toBe(false);
    });
  });
});
