---
block: flickrBlock
---

Embeds a Flickr photo or album in the page, using the embed code Flickr provides for it.

The block stores the embed code as it was pasted, not a URL. The code must contain a link to a `www.flickr.com/photos/` page and an image served from `live.staticflickr.com`. Nothing else from Flickr is stored.

### Fields

- `flickrId`: required. The HTML embed code copied from Flickr. Its first link must point to `https://www.flickr.com/photos/...` and its first image to `https://live.staticflickr.com/...`. Plain URLs are refused, and so is HTML that lacks either part.
- `align`: optional. `left`, `center` or `right`.
- `size`: optional. The image size preset for the embed width.

### Examples

Minimal block, where the value is the embed code as a single string:

```json
{
  "@type": "flickrBlock",
  "flickrId": "<a href=\"https://www.flickr.com/photos/example/1234567890/\"><img src=\"https://live.staticflickr.com/1234/1234567890_abcdef_b.jpg\" alt=\"Example\"></a>"
}
```

Block with alignment and size:

```json
{
  "@type": "flickrBlock",
  "flickrId": "<a href=\"https://www.flickr.com/photos/example/1234567890/\"><img src=\"https://live.staticflickr.com/1234/1234567890_abcdef_b.jpg\" alt=\"Example\"></a>",
  "align": "right",
  "size": "s"
}
```
