export function isValidPinterestUrl(value?: string): boolean {
  if (!value || typeof value !== 'string') return false;

  const re =
    /^(?:https?:\/\/)?(?:(?:www|[a-z]{2})\.)?(?:pinterest\.[a-z.]+\/pin\/\d+|pin\.it\/[^\s/]+)/i;

  return re.test(value.trim());
}
