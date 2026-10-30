---
block: spotifyBlock
---

Embeds a Spotify track, album, playlist, artist or episode player in the page.

The block stores the Spotify URL as it was given and renders it with Spotify's embed. The item is not copied into the block.

### Fields

- `spotifyId`: required. The URL of a Spotify item, in the form `https://open.spotify.com/<type>/<id>`, where `<type>` is `artist`, `album`, `episode`, `track` or `playlist`. The scheme is optional. Other hosts are refused.
- `align`: optional. `left`, `center` or `right`.
- `size`: optional. The image size preset for the embed width.
- `colorMode`: optional. `system`, `light` or `dark`. `light` and `dark` set the player theme, and `system` leaves the player as Spotify draws it. Stored default: `system`. When the value is missing, the view also uses `system`, so the default never changes how an existing block renders.

### Examples

Minimal block:

```json
{ "@type": "spotifyBlock", "spotifyId": "https://open.spotify.com/track/4exampleTrackId" }
```

Block with every field:

```json
{
  "@type": "spotifyBlock",
  "spotifyId": "https://open.spotify.com/playlist/37exampleListId",
  "align": "center",
  "size": "m",
  "colorMode": "dark"
}
```
