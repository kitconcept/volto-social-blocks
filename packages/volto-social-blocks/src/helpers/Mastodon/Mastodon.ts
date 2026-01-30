export function isValidMastodonUrl(value?: string): boolean {
  if (!value || typeof value !== 'string') return false;

  // Mastodon URLs can be on any instance, pattern: https://instance.domain/@username/post-id
  const mastodonUrlRegex = /^(?:https?:\/\/)?[\w.-]+\/@[\w]+\/\d+/i;

  return mastodonUrlRegex.test(value);
}

export function extractMastodonEmbedUrl(url?: string): string | null {
  if (!url || !isValidMastodonUrl(url)) return null;

  // Mastodon embed URL is the original URL + /embed
  return url.replace(/\/$/, '') + '/embed';
}
