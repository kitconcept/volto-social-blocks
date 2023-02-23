export const isValidInstagramId = (value) => {
  const regex = [
    /(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am|instagr.com)\/p\/(\w+)/gim,
  ];
  let match;
  for (const re of regex) {
    match = re.exec(value);
    if (match) {
      return true;
    }
  }
  return false;
};
