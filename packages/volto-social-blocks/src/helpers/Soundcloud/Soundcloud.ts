const SOUNDCLOUD_API_PREFIX = 'https://api.soundcloud.com' as const;

export function extractSoundCloudId(value?: string): string {
  if (!value || typeof value !== 'string') return '';

  const match = value.match(/api\.soundcloud\.com\/([^"]*)/);
  if (!match?.[1]) return '';

  return `${SOUNDCLOUD_API_PREFIX}/${match[1]}`;
}

export function isValidSoundcloudId(value?: string): boolean {
  return typeof value === 'string' && value.startsWith(SOUNDCLOUD_API_PREFIX);
}
