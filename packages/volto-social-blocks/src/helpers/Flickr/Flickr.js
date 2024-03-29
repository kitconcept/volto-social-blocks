export const isValidFlickrId = (value) => {
  if (!__CLIENT__) {
    throw new Error('isValidFlickrId is only implemented on the client');
  }
  const parser = __CLIENT__ ? new DOMParser() : undefined;
  const inputData = parser?.parseFromString(value, 'text/html');
  const linkHref = inputData?.links[0]?.href ?? '';
  const imgSrc = inputData?.images[0]?.src ?? '';

  const linkRegex = /https:\/\/www.flickr.com\/photos\/.*/gim;
  const imgRegex = /https:\/\/live.staticflickr.com\/.*/gim;

  return linkRegex.test(linkHref) && imgRegex.test(imgSrc);
};
