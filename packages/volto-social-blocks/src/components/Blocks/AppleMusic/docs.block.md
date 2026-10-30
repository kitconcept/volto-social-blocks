---
block: applemusicBlock
---

Embeds an Apple Music or Apple Podcasts item, such as a song, album, playlist, or podcast, in the page.

The block stores the URL as it was given. When it renders, it converts the URL to the Apple embed address, so the stored value is always the public item URL and nothing is fetched from the site.

### Fields

- `appleMusicUrl`: required. The public URL of the item, on `music.apple.com` or `podcasts.apple.com`, with a path such as `/<country>/album/<name>/<id>`. Any other host is refused by the sidebar form.
- `align`: optional. `left`, `center` or `right`. Without a value, the block is aligned by the default layout.
- `size`: optional. The image size preset the embed uses for its width. Without a value, the block uses the full width.

### Examples

Minimal block:

```json
{ "@type": "applemusicBlock", "appleMusicUrl": "https://music.apple.com/us/album/example/1234567890" }
```

Block with alignment and size:

```json
{
  "@type": "applemusicBlock",
  "appleMusicUrl": "https://podcasts.apple.com/us/podcast/example/id1234567890",
  "align": "center",
  "size": "m"
}
```
