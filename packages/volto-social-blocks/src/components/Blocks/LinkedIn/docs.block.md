---
block: linkedinBlock
---

Embeds a LinkedIn post in the page, so readers can see and open it without leaving the site.

The block takes the embed URL of the post and stores it in its normalized form, `https://www.linkedin.com/embed/feed/update/<urn>`. Any other part of a pasted URL or embed code is dropped. Nothing else from the post is stored.

### Fields

- `postURL`: required. The normalized embed URL of the post, starting with `https://www.linkedin.com/embed/feed/update/`. The sidebar form accepts the embed URL and stores it in this form. Other LinkedIn URLs are refused.
- `styles`: optional object with the styling of the embed:
  - `align`: `left`, `center` or `right`.
  - `size`: the image size preset for the embed width.

### Examples

Minimal block:

```json
{
  "@type": "linkedinBlock",
  "postURL": "https://www.linkedin.com/embed/feed/update/urn:li:share:7000000000000000000"
}
```

Block with styling:

```json
{
  "@type": "linkedinBlock",
  "postURL": "https://www.linkedin.com/embed/feed/update/urn:li:share:7000000000000000000",
  "styles": { "align": "center", "size": "m" }
}
```
