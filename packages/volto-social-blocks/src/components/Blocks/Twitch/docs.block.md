---
block: twitchBlock
---

Embeds a Twitch channel, video or clip player in the page.

The block stores the Twitch URL as it was given and builds the player address when the page renders. The stream or video is not copied into the block. The embed's parent domain is taken from the host the page is served from.

### Fields

- `twitchUrl`: required. One of the forms `https://www.twitch.tv/<channel>`, `https://www.twitch.tv/videos/<id>` or `https://www.twitch.tv/<channel>/clip/<slug>`. The `www.` prefix and the scheme are optional. Other hosts are refused.
- `showChat`: optional boolean. Whether the chat is shown next to a channel player. Only channels have a chat, so the setting has no effect on videos and clips. Stored default: `false`. When the value is missing, the view also hides the chat, so the default never changes how an existing block renders.
- `align`: optional. `left`, `center` or `right`.
- `size`: optional. The image size preset for the embed width.

### Examples

Minimal block, with a channel:

```json
{ "@type": "twitchBlock", "twitchUrl": "https://www.twitch.tv/example" }
```

Block with every field:

```json
{
  "@type": "twitchBlock",
  "twitchUrl": "https://www.twitch.tv/videos/1234567890",
  "showChat": false,
  "align": "center",
  "size": "l"
}
```
