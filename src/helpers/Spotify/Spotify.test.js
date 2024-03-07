import { isValidSpotifyId } from './Spotify';

describe('Spotify', () => {
  describe('isValidSpotifyId', () => {
    it('validates podcast episode urls', () => {
      expect(isValidSpotifyId('https://open.spotify.com/episode/0EPE3mFCbNUunN3PFUv1lT?si=1ef7ad30c07744c4')).toBe(true);
    });
    it('validates artist urls', () => {
      expect(isValidSpotifyId('https://open.spotify.com/artist/1zcY9unQiUt95IFNkUxhHo?si=QyHgoa_3TrSAWWJC2OnArg')).toBe(true);
    });
    it('validates album urls', () => {
      expect(isValidSpotifyId('https://open.spotify.com/album/2mdkf39z60lelr7zulBMky?si=IV3HeDtiQiq_EP5hwcu08A')).toBe(true);
    });
    it('validates track urls', () => {
      expect(isValidSpotifyId('https://open.spotify.com/track/1Oq3hZjG2WWIR2MEqASnNd?si=f508b9e246a74d88')).toBe(true);
    });
    it('validates playlist urls', () => {
      expect(isValidSpotifyId('https://open.spotify.com/playlist/37i9dQZF1E4xnL0iKIpi7G?si=166cbfdc37894120')).toBe(true);
    });
  });
});
