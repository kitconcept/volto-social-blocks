---
block: pinterestBlock
---

Embeds a Pinterest pin in the page, so readers can see the image and follow the link from the site.

The block stores the pin URL as it was given and renders it with Pinterest's embed. The pin's image and description are not copied into the block.

### Fields

- `pinterestUrl`: required. The URL of one pin, either `https://<country>.pinterest.<domain>/pin/<id>/` or the short form `https://pin.it/<code>`. Board and profile URLs are refused.
- `align`: optional. `left`, `center` or `right`.
- `size`: optional. The image size preset for the embed width.

### Examples

Minimal block:

```json
{ "@type": "pinterestBlock", "pinterestUrl": "https://pinterest.com/pin/1234567890123456789/" }
```

Block with alignment and size:

```json
{
  "@type": "pinterestBlock",
  "pinterestUrl": "https://pin.it/exampleCode",
  "align": "center",
  "size": "s"
}
```
