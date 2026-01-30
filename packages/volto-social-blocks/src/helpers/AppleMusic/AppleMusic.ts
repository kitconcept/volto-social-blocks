export function isValidAppleMusicUrl(value?: string): boolean {
  if (!value || typeof value !== 'string') return false;

  // Matches Apple Music and Apple Podcasts URLs
  const appleMusicUrlRegex =
    /^(?:https?:\/\/)?(?:music|podcasts)\.apple\.com\/[\w-]+\/.+/i;

  return appleMusicUrlRegex.test(value);
}

export function extractAppleMusicEmbedUrl(url?: string): string | null {
  if (!url || !isValidAppleMusicUrl(url)) return null;

  // Apple Music/Podcasts embed URL uses embed.music.apple.com or embed.podcasts.apple.com
  if (url.includes('music.apple.com')) {
    return url.replace('music.apple.com', 'embed.music.apple.com');
  } else if (url.includes('podcasts.apple.com')) {
    return url.replace('podcasts.apple.com', 'embed.podcasts.apple.com');
  }

  return null;
}
