export function isValidFacebookId(value?: string): boolean {
  if (!value) return false;
  const re =
    /(?:(?:http|https):\/\/)?(?:www\.)?(?:facebook\.com|m\.facebook\.com|fb\.watch)\/(\w+)/i;
  return re.test(value);
}
