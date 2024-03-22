export const isValidSpotifyId = (value) => {
  const regex = [/(?:(?:https):\/\/)?(?:open.spotify.com)\/(?:artist|album|episode|track|playlist)\/(\w+)/gim];
  let match;
  for (const re of regex) {
    match = re.exec(value);
    if (match) {
      return true;
    }
  }
  return false;
};
