---
block: blueskyBlock
---

Embeds a single post from the Bluesky social network in the page.

The block stores the post URL as it was given and renders it with Bluesky's embed. Nothing from the post is copied into the block, so the post shows its current content.

### Fields

- `blueskyUrl`: required. The URL of one post, in the form `https://bsky.app/profile/<handle or did>/post/<post id>`. The `www.` prefix and a trailing query or fragment are accepted. Profile or feed URLs are refused.
- `align`: optional. `left`, `center` or `right`.
- `size`: optional. The image size preset for the embed width.
- `colorMode`: optional. `system`, `light` or `dark`, passed to the embed as its color scheme. Stored default: `system`. When the value is missing, the view also uses `system`, so the default never changes how an existing block renders.

### Examples

Minimal block:

```json
{ "@type": "blueskyBlock", "blueskyUrl": "https://bsky.app/profile/example.bsky.social/post/3kexample" }
```

Block with every field:

```json
{
  "@type": "blueskyBlock",
  "blueskyUrl": "https://bsky.app/profile/example.bsky.social/post/3kexample",
  "align": "center",
  "size": "m",
  "colorMode": "dark"
}
```
