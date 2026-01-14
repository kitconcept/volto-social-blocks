export function isValidSpotifyId(value?: string): boolean {
  if (!value || typeof value !== 'string') return false;

  const spotifyUrlRegex =
    /^(?:https?:\/\/)?open\.spotify\.com\/(?:artist|album|episode|track|playlist)\/\w+/i;

  return spotifyUrlRegex.test(value);
}
