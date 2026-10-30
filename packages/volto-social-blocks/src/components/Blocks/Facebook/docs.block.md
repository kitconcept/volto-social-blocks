---
block: facebookBlock
---

Embeds a Facebook post or video in the page.

The block stores the Facebook URL as it was given and renders it with Facebook's embed. The content is not copied into the block.

### Fields

- `facebookId`: required. The URL of a public post or video on `facebook.com`, `m.facebook.com` or `fb.watch`. The scheme is optional. Other hosts are refused.
- `align`: optional. `left`, `center` or `right`.
- `size`: optional. The image size preset for the embed width.

### Examples

Minimal block:

```json
{ "@type": "facebookBlock", "facebookId": "https://www.facebook.com/example/posts/1234567890" }
```

Block with alignment and size:

```json
{
  "@type": "facebookBlock",
  "facebookId": "https://fb.watch/exampleVideo/",
  "align": "left",
  "size": "l"
}
```
