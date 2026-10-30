---
block: tiktokBlock
---

Embeds a TikTok video in the page, so readers can watch it without leaving the site.

The block stores the video URL as it was given and renders it with TikTok's embed. The video is not copied into the block.

### Fields

- `tiktokUrl`: required. One of the forms `https://www.tiktok.com/@<user>/video/<id>`, `https://www.tiktok.com/t/<code>`, or the short links `vm.tiktok.com/<code>` and `vt.tiktok.com/<code>`. The `www.` or `m.` prefix and the scheme are optional. Profile URLs are refused.
- `align`: optional. `left`, `center` or `right`. The block has no size field: the embed takes the full width of its column.

### Examples

Minimal block:

```json
{ "@type": "tiktokBlock", "tiktokUrl": "https://www.tiktok.com/@example/video/1234567890123456789" }
```

Block with alignment:

```json
{ "@type": "tiktokBlock", "tiktokUrl": "https://vm.tiktok.com/exampleCode/", "align": "center" }
```
