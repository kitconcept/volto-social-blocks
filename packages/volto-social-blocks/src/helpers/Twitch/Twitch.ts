export function isValidTwitchUrl(value?: string): boolean {
  if (!value || typeof value !== 'string') return false;

  // Matches Twitch channel, video, and clip URLs
  const twitchUrlRegex =
    /^(?:https?:\/\/)?(?:www\.)?twitch\.tv\/(?:videos\/\d+|[\w]+(?:\/clip\/[\w-]+)?|\w+)/i;

  return twitchUrlRegex.test(value);
}

export function extractTwitchEmbedInfo(url?: string): {
  type: 'channel' | 'video' | 'clip' | null;
  id: string | null;
} {
  if (!url || !isValidTwitchUrl(url)) {
    return { type: null, id: null };
  }

  // Extract video ID
  const videoMatch = url.match(/twitch\.tv\/videos\/(\d+)/i);
  if (videoMatch) {
    return { type: 'video', id: videoMatch[1] };
  }

  // Extract clip slug
  const clipMatch = url.match(/twitch\.tv\/\w+\/clip\/([\w-]+)/i);
  if (clipMatch) {
    return { type: 'clip', id: clipMatch[1] };
  }

  // Extract channel name
  const channelMatch = url.match(/twitch\.tv\/([\w]+)(?:\/|$)/i);
  if (channelMatch && channelMatch[1] !== 'videos') {
    return { type: 'channel', id: channelMatch[1] };
  }

  return { type: null, id: null };
}

export function buildTwitchEmbedUrl(
  url?: string,
  parent?: string,
): string | null {
  const info = extractTwitchEmbedInfo(url);
  if (!info.type || !info.id) return null;

  const parentDomain =
    parent ?? (typeof window !== 'undefined' ? window.location.hostname : null);
  if (!parentDomain) return null;
  const baseUrl = 'https://player.twitch.tv/';

  if (info.type === 'channel') {
    return `${baseUrl}?channel=${info.id}&parent=${parentDomain}`;
  } else if (info.type === 'video') {
    return `${baseUrl}?video=${info.id}&parent=${parentDomain}`;
  } else if (info.type === 'clip') {
    return `${baseUrl}?clip=${info.id}&parent=${parentDomain}`;
  }

  return null;
}
