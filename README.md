# Social Blocks for Volto (@kitconcept/volto-social-blocks)

Embed social media content from 14 different platforms directly into your [Plone](https://plone.org) pages with [Volto](https://github.com/plone/volto).

[![npm](https://img.shields.io/npm/v/@kitconcept/volto-social-blocks)](https://www.npmjs.com/package/@kitconcept/volto-social-blocks)
[![](https://img.shields.io/badge/-Storybook-ff4785?logo=Storybook&logoColor=white&style=flat-square)](https://kitconcept.github.io/volto-social-blocks/)
[![CI](https://github.com/kitconcept/volto-social-blocks/actions/workflows/main.yml/badge.svg)](https://github.com/kitconcept/volto-social-blocks/actions/workflows/main.yml)

## ✨ Features

**🎥 [Watch Demo Video](https://raw.githubusercontent.com/kitconcept/volto-social-blocks/refs/heads/main/docs/_static/SocialBlocks.mp4)**

![Demo](https://raw.githubusercontent.com/kitconcept/volto-social-blocks/refs/heads/main/docs/_static/Social-Blocks.GIF)

This addon provides 14 Volto blocks to embed content from popular social media platforms:

- **🎵 Apple Music** - Embed songs, albums, and playlists from Apple Music
- **🦋 Bluesky** - Embed posts from the Bluesky social network
- **👥 Facebook** - Embed Facebook posts and videos
- **📸 Flickr** - Embed photos and albums from Flickr
- **📷 Instagram** - Embed Instagram posts (photos and videos)
- **💼 LinkedIn** - Embed LinkedIn posts
- **🐘 Mastodon** - Embed toots from Mastodon instances
- **📌 Pinterest** - Embed Pinterest pins and boards
- **🎧 SoundCloud** - Embed audio tracks and playlists from SoundCloud
- **🎶 Spotify** - Embed Spotify tracks, albums, playlists, and podcasts
- **🧵 Threads** - Embed posts from Meta's Threads platform
- **🎬 TikTok** - Embed TikTok videos
- **𝕏 X/Twitter** - Embed posts (formerly Twitter)
- **🎮 Twitch** - Embed Twitch videos and streams

### Key Features

- **Easy integration**: Simply paste the URL and the block handles the embedding automatically
- **Responsive display**: All embeds adapt to different screen sizes
- **Privacy options**: Support for GDPR-compliant consent management
- **Flexible styling**: Configure alignment and sizes for each embed
- **Live preview**: See the embedded content directly in the Volto editor

> **Note**: For interactive examples and detailed documentation, check out the [Storybook](https://kitconcept.github.io/volto-social-blocks/).

## Installation

To install your project, you must choose the method appropriate to your version of Volto.


### Volto 18 and later

Add `@kitconcept/volto-social-blocks` to your `package.json`:

```json
"dependencies": {
    "@kitconcept/volto-social-blocks": "*"
}
```

Add `@kitconcept/volto-social-blocks` to your `volto.config.js`:

```javascript
const addons = ['@kitconcept/volto-social-blocks'];
```

If this package provides a Volto theme, and you want to activate it, then add the following to your `volto.config.js`:

```javascript
const theme = '@kitconcept/volto-social-blocks';
```

### Volto 17 and earlier

Create a new Volto project (you can skip this step if you already have one):

```
npm install -g yo @plone/generator-volto
yo @plone/volto my-volto-project --addon @kitconcept/volto-social-blocks
cd my-volto-project
```

Add `@kitconcept/volto-social-blocks` to your package.json:

```JSON
"addons": [
    "@kitconcept/volto-social-blocks"
],

"dependencies": {
    "@kitconcept/volto-social-blocks": "*"
}
```

Download and install the new add-on by running:

```
yarn install
```

Start volto with:

```
yarn start
```

### Test it

Go to http://localhost:3000/, login, create a new page. The social blocks will show up in the Volto blocks chooser.

## 🔒 Privacy & GDPR Compliance

### Custom Privacy Consent Notice

You can register a custom React component to check for privacy consent and show the user a prompt to confirm accessing external services. This is particularly useful to meet European GDPR requirements.

```javascript
config.registerComponent({
  name: 'CheckPrivacyConsent',
  component: IfConfirm,  // use your own component here
});
```

The [@kitconcept/volto-dsgvo-banner](https://github.com/kitconcept/volto-dsgvo-banner) addon provides one possible implementation of the `CheckPrivacyConsent` component.

## 📚 Available Blocks

### Supported Platforms

| Platform | Block Name | Content Types |  
|----------|-----------|---------------
| Apple Music | `applemusic` | Songs, albums, playlists
| Bluesky | `bluesky` | Posts
| Facebook | `facebook` | Posts, videos 
| Flickr | `flickr` | Photos, albums 
| Instagram | `instagram` | Posts (photos/videos)
| LinkedIn | `linkedin` | Posts 
| Mastodon | `mastodon` | Toots
| Pinterest | `pinterest` | Pins, boards 
| SoundCloud | `soundcloud` | Tracks, playlists 
| Spotify | `spotify` | Tracks, albums, playlists, podcasts 
| Threads | `threads` | Posts 
| TikTok | `tiktok` | Videos 
| X/Twitter | `tweet` | Posts 
| Twitch | `twitch` | Videos, streams 

## Development

The development of this add-on is done in isolation using a new approach using pnpm workspaces and latest `mrs-developer` and other Volto core improvements.
For this reason, it only works with pnpm and Volto 18 (currently in alpha).


### Prerequisites ✅

-   An [operating system](https://6.docs.plone.org/install/create-project-cookieplone.html#prerequisites-for-installation) that runs all the requirements mentioned.
-   [nvm](https://6.docs.plone.org/install/create-project-cookieplone.html#nvm)
-   [Node.js and pnpm](https://6.docs.plone.org/install/create-project.html#node-js) 22
-   [Make](https://6.docs.plone.org/install/create-project-cookieplone.html#make)
-   [Git](https://6.docs.plone.org/install/create-project-cookieplone.html#git)
-   [Docker](https://docs.docker.com/get-started/get-docker/) (optional)

### Installation 🔧

1.  Clone this repository, then change your working directory.

    ```shell
    git clone git@github.com:kitconcept/volto-social-blocks.git
    cd volto-social-blocks
    ```

2.  Install this code base.

    ```shell
    make install
    ```


### Make convenience commands

Run `make help` to list the available commands.

```text
help                             Show this help
install                          Installs the add-on in a development environment
start                            Starts Volto, allowing reloading of the add-on during development
build                            Build a production bundle for distribution of the project with the add-on
i18n                             Sync i18n
ci-i18n                          Check if i18n is not synced
format                           Format codebase
lint                             Lint, or catch and remove problems, in code base
release                          Release the add-on on npmjs.org
release-dry-run                  Dry-run the release of the add-on on npmjs.org
test                             Run unit tests
ci-test                          Run unit tests in CI
backend-docker-start             Starts a Docker-based backend for development
storybook-start                  Start Storybook server on port 6006
storybook-build                  Build Storybook
acceptance-frontend-dev-start    Start acceptance frontend in development mode
acceptance-frontend-prod-start   Start acceptance frontend in production mode
acceptance-backend-start         Start backend acceptance server
ci-acceptance-backend-start      Start backend acceptance server in headless mode for CI
acceptance-test                  Start Cypress in interactive mode
ci-acceptance-test               Run cypress tests in headless mode for CI
ci-acceptance-test-run-all       With a single command, run backend, frontend, and Cypress tests in headless mode for CI
ci-acceptance                    Alias for ci-acceptance-test-run-all
ci-acceptence                    Backward-compatible alias (common typo)
```

### Development environment set up

Install package requirements.

```shell
make install
```

### Start developing

Start the backend.

```shell
make backend-docker-start
```

In a separate terminal session, start the frontend.

```shell
make start
```

### Lint code

Run ESlint, Prettier, and Stylelint in analyze mode.

```shell
make lint
```

### Format code

Run ESlint, Prettier, and Stylelint in fix mode.

```shell
make format
```

### i18n

Extract the i18n messages to locales.

```shell
make i18n
```

### Unit tests

Run unit tests.

```shell
make test
```

### Run Cypress tests

Run each of these steps in separate terminal sessions.

In the first session, start the frontend in development mode.

```shell
make acceptance-frontend-dev-start
```

In the second session, start the backend acceptance server.

```shell
make acceptance-backend-start
```

In the third session, start the Cypress interactive test runner.

```shell
make acceptance-test
```

## Credits

The development of this add-on was sponsored by kitconcept GmbH.

![kitconcept GmbH](https://raw.githubusercontent.com/kitconcept/volto-form-builder/master/kitconcept.png)

## License

The project is licensed under the MIT license.
