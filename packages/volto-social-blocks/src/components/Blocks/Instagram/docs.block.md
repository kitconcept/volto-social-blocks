---
block: instagramBlock
---

Embeds an Instagram post, reel or video in the page.

The block stores the Instagram URL as it was given and renders it with Instagram's embed. The media and caption are not copied into the block.

### Fields

- `instagramId`: required. The URL of a public post or reel, in the form `https://www.instagram.com/p/<id>/` or `https://www.instagram.com/reel/<id>/`. The hosts `instagr.am` and `instagr.com` are also accepted. Profile URLs are refused.
- `align`: optional. `left`, `center` or `right`.
- `size`: optional. The image size preset for the embed width.
- `captioned`: optional boolean. Whether the embed shows the caption. Stored default: `true`. When the value is missing, the view also shows the caption, so the default never changes how an existing block renders.

### Examples

Minimal block:

```json
{ "@type": "instagramBlock", "instagramId": "https://www.instagram.com/p/CexampleID/" }
```

Block with every field:

```json
{
  "@type": "instagramBlock",
  "instagramId": "https://www.instagram.com/reel/CexampleID/",
  "align": "center",
  "size": "m",
  "captioned": false
}
```
