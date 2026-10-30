---
block: tweetBlock
---

Embeds a post from X, formerly Twitter, in the page.

The block stores the numeric ID of the post, not its URL. When a URL or a bare ID is given, the sidebar form extracts the ID and stores it. The post is rendered by X's embed, so its text and media are not copied into the block.

### Fields

- `tweetId`: required. The numeric ID of the post, as a string of digits. Given a URL, the ID is the number after `/status/`. Other values are refused.
- `align`: optional. `left`, `center` or `right`.
- `size`: optional. The image size preset for the embed width.
- `theme`: optional. `light` or `dark`, the color theme of the embed. Stored default: `light`, which comes from the site's block configuration. When the value is missing, the view also uses `light`.
- `lang`: optional. The language code of the embed interface, such as `en` or `pt`. Stored default: `en`, which comes from the site's block configuration. When the value is missing, the view also uses `en`.
- `dnt`: optional boolean. When `true`, the embed sets Do Not Track. Stored default: `true`. When the value is missing, the view also uses `true`.

### Examples

Minimal block, with the numeric ID:

```json
{ "@type": "tweetBlock", "tweetId": "1234567890123456789" }
```

Block with every field:

```json
{
  "@type": "tweetBlock",
  "tweetId": "1234567890123456789",
  "align": "center",
  "size": "m",
  "theme": "dark",
  "lang": "pt",
  "dnt": true
}
```
