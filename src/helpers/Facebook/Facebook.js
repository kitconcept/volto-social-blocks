export const isValidFacebookId = (value) => {
  const regex = [/(?:(?:http|https):\/\/)?(?:www.)?(?:facebook.com|m.facebook.com|fb.watch)\/(\w+)/gim];
  let match;
  for (const re of regex) {
    match = re.exec(value);
    if (match) {
      return true;
    }
  }
  return false;
};
