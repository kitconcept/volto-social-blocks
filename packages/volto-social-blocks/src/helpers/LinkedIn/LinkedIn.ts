const LINKEDIN_EMBED_PREFIX = 'https://www.linkedin.com/embed/feed/update/';

export function extractLinkedInPostURL(value?: string): string | null {
  if (!value || typeof value !== 'string') return null;

  const match = value.match(
    /(?:https?:\/\/)?(?:www\.)?linkedin\.com\/embed\/feed\/update\/([^?]+)/i,
  );

  if (!match?.[1]) return null;
  return `${LINKEDIN_EMBED_PREFIX}${match[1]}`;
}

export function isValidLinkedInPostURL(value?: string): boolean {
  return extractLinkedInPostURL(value) !== null;
}
