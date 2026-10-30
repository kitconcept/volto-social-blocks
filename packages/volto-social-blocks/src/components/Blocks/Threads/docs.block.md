---
block: threadsBlock
---

Embeds a post from Meta's Threads platform in the page.

The block stores the post URL as it was given and renders it with Threads' embed. The post is not copied into the block.

### Fields

- `threadsUrl`: required. The URL of one post, in the form `https://www.threads.net/@<user>/post/<post id>` or the same path on `threads.com`. The `www.` prefix is optional. Profile URLs are refused.
- `align`: optional. `left`, `center` or `right`.
- `size`: optional. The image size preset for the embed width.

### Examples

Minimal block:

```json
{ "@type": "threadsBlock", "threadsUrl": "https://www.threads.net/@example/post/CexampleId" }
```

Block with alignment and size:

```json
{
  "@type": "threadsBlock",
  "threadsUrl": "https://www.threads.com/@example/post/CexampleId",
  "align": "right",
  "size": "l"
}
```
