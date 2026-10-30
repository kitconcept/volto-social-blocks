---
block: soundcloudBlock
---

Embeds a SoundCloud track, playlist or profile player in the page.

The block takes the SoundCloud API URL of the item and stores it in its normalized form, `https://api.soundcloud.com/<path>`. The player is loaded from SoundCloud when the page renders. Nothing else from the item is stored.

### Fields

- `soundcloudId`: required. The normalized API URL of the item, starting with `https://api.soundcloud.com/`. The sidebar form accepts an embed code that contains that URL and stores the normalized form. Other URLs are refused.
- `align`: optional. `left`, `center` or `right`.
- `size`: optional. The image size preset for the embed width.

### Examples

Minimal block:

```json
{
  "@type": "soundcloudBlock",
  "soundcloudId": "https://api.soundcloud.com/tracks/123456789"
}
```

Block with alignment and size:

```json
{
  "@type": "soundcloudBlock",
  "soundcloudId": "https://api.soundcloud.com/playlists/123456789",
  "align": "center",
  "size": "m"
}
```
