export function isValidBlueskyUrl(value?: string): boolean {
  if (!value || typeof value !== 'string') return false;

  const trimmed = value.trim();

  const re =
    /^(?:https?:\/\/)?(?:www\.)?bsky\.app\/profile\/[^\s/]+\/post\/[^\s/]+(?:[?#].*)?$/i;

  return re.test(trimmed);
}
