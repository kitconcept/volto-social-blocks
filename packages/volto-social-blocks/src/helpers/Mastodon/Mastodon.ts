export function isValidMastodonUrl(value?: string): boolean {
  if (!value || typeof value !== 'string') return false;

  // Check if it's HTML embed code
  if (value.includes('mastodon-embed') || value.includes('<iframe')) {
    return true;
  }

  // Mastodon URLs can be on any instance, pattern: https://instance.domain/@username/post-id
  const mastodonUrlRegex = /^(?:https?:\/\/)?[\w.-]+\/@[\w]+\/\d+/i;

  return mastodonUrlRegex.test(value);
}

export function extractMastodonEmbedUrl(input?: string): string | null {
  if (!input) return null;

  // Try to extract from iframe src
  const iframeSrcMatch = input.match(/src=["']([^"']+)["']/);
  if (iframeSrcMatch && iframeSrcMatch[1]) {
    return iframeSrcMatch[1];
  }

  // Try to extract from data-embed-url attribute
  const dataEmbedMatch = input.match(/data-embed-url=["']([^"']+)["']/);
  if (dataEmbedMatch && dataEmbedMatch[1]) {
    return dataEmbedMatch[1];
  }

  // Try to extract from href in blockquote
  const hrefMatch = input.match(/href=["']([^"']+)["']/);
  if (hrefMatch && hrefMatch[1] && isValidMastodonUrl(hrefMatch[1])) {
    return hrefMatch[1].replace(/\/$/, '') + '/embed';
  }

  // If it's a direct URL, convert to embed URL
  if (isValidMastodonUrl(input) && !input.includes('<')) {
    return input.replace(/\/$/, '') + '/embed';
  }

  return null;
}

export function extractMastodonScriptUrl(input?: string): string | null {
  if (!input) return null;

  // Try to extract script src from embed code
  const scriptMatch = input.match(/<script[^>]+src=["']([^"']+)["']/);
  if (scriptMatch && scriptMatch[1]) {
    return scriptMatch[1];
  }

  // Try to extract from data-allowed-prefixes or infer from embed URL
  const embedUrl = extractMastodonEmbedUrl(input);
  if (embedUrl) {
    try {
      const url = new URL(embedUrl);
      return `${url.origin}/embed.js`;
    } catch {
      return null;
    }
  }

  return null;
}
