export function isValidInstagramId(value?: string): boolean {
  if (!value) return false;
  const re =
    /(?:(?:http|https):\/\/)?(?:www\.)?(?:instagram\.com|instagr\.am|instagr\.com)\/(?:p|reel)\/(\w+)/i;
  return re.test(value);
}
