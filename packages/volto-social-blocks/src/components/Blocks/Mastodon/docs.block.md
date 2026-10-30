---
block: mastodonBlock
---

Embeds a post, called a toot, from any Mastodon instance in the page.

The block accepts either the post URL or the embed code Mastodon provides, and stores the value as it was given. The post is loaded by Mastodon's embed script when the page renders, not copied into the block.

### Fields

- `mastodonUrl`: required. One of two forms:
  - the post URL, `https://<instance>/@<user>/<post id>`, on any instance;
  - the HTML embed code of the post, which contains a `mastodon-embed` blockquote or an `<iframe>`.

  Other values are refused.
- `align`: optional. `left`, `center` or `right`.
- `size`: optional. The image size preset for the embed width.

### Examples

Minimal block, with the post URL:

```json
{ "@type": "mastodonBlock", "mastodonUrl": "https://mastodon.example.org/@example/123456789" }
```

Block with alignment and size:

```json
{
  "@type": "mastodonBlock",
  "mastodonUrl": "https://mastodon.example.org/@example/123456789",
  "align": "left",
  "size": "m"
}
```
