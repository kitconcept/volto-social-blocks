export function isValidFlickrId(value?: string): boolean {
  if (!value) return false;

  if (typeof window === 'undefined' || typeof DOMParser === 'undefined') {
    return false;
  }

  const parser = new DOMParser();
  const inputData = parser.parseFromString(value, 'text/html');
  const linkHref = inputData?.links?.[0]?.href ?? '';
  const imgSrc = inputData?.images?.[0]?.src ?? '';

  const linkRegex = /^https:\/\/www\.flickr\.com\/photos\/.*/i;
  const imgRegex = /^https:\/\/live\.staticflickr\.com\/.*/i;

  return linkRegex.test(linkHref) && imgRegex.test(imgSrc);
}
