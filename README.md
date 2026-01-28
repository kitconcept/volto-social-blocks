# 🎨 Social Blocks for Volto (@kitconcept/volto-social-blocks)

Addon implementing embeddable social network content blocks for [Plone](https://plone.org) projects with [Volto](https://github.com/plone/volto).

[![npm](https://img.shields.io/npm/v/@kitconcept/volto-social-blocks)](https://www.npmjs.com/package/@kitconcept/volto-social-blocks)
[![](https://img.shields.io/badge/-Storybook-ff4785?logo=Storybook&logoColor=white&style=flat-square)](https://kitconcept.github.io/volto-social-blocks/)
[![CI](https://github.com/kitconcept/volto-social-blocks/actions/workflows/main.yml/badge.svg)](https://github.com/kitconcept/volto-social-blocks/actions/workflows/main.yml)

## ✨ Features

- **Bluesky block** – Embed Bluesky posts directly in your pages
- **Facebook block** – Display Facebook embeds with privacy consent control
- **Flickr block** – Showcase Flickr photos and galleries
- **Instagram block** – Embed Instagram posts and feeds
- **Pinterest block** – Display Pinterest pins and boards
- **Soundcloud block** – Embed Soundcloud audio with privacy options
- **Spotify block** – Integrate Spotify tracks and playlists
- **TikTok block** – Embed TikTok videos with privacy consent
- **Tweet block** – Display tweets from X (formerly Twitter)

## 📦 Installation

Installing `@kitconcept/volto-social-blocks` requires Volto 18 or above.

### 🚀 Adding this package as a dependency

To add `@kitconcept/volto-social-blocks` to your project, locate your project's policy package (typically found in the `packages` folder) and edit its `package.json` file.

Add `@kitconcept/volto-social-blocks` under `dependencies`:

```json
"dependencies": {
    "@kitconcept/volto-social-blocks": "*"
}
```

Then add `@kitconcept/volto-social-blocks` to the `addons` array:

```json
"addons": [
  "@kitconcept/volto-social-blocks"
]
```

### 🚀 Starting the project

After adding `@kitconcept/volto-social-blocks` to your project, run the installation:

```bash
make install
```

Then start the development server:

```bash
make start
```

## ✅ Test installation

Visit http://localhost:3000/ in a browser, login, and check the new blocks should be available.

### 🔒 Custom Privacy Consent Notice

You can register a custom React component to check for privacy consent and show the user a prompt to confirm accessing the external services. This is useful to meet European GDPR requirements, for example.

```
config.registerComponent({
  name: 'CheckPrivacyConsent',
  component: IfConfirm,  # use your own component here
});
```

The [@kitconcept/volto-dsgvo-banner](https://github.com/kitconcept/volto-dsgvo-banner) addon provides one possible implementation of the `CheckPrivacyConsent` component.

## 👨‍💻 Development

The development of this add-on is done in isolation using a new approach with pnpm workspaces and latest `mrs-developer` and other Volto core improvements.
It requires pnpm and Volto 18 or higher.


### ✅ Prerequisites

-   An [operating system](https://6.docs.plone.org/install/create-project-cookieplone.html#prerequisites-for-installation) that runs all the requirements mentioned.
-   [nvm](https://6.docs.plone.org/install/create-project-cookieplone.html#nvm)
-   [Node.js and pnpm](https://6.docs.plone.org/install/create-project.html#node-js) 22
-   [Make](https://6.docs.plone.org/install/create-project-cookieplone.html#make)
-   [Git](https://6.docs.plone.org/install/create-project-cookieplone.html#git)
-   [Docker](https://docs.docker.com/get-started/get-docker/) (optional)

### 🔧 Installation

1.  Clone this repository, then change your working directory.

    ```shell
    git clone git@github.com:kitconcept/volto-social-blocks.git
    cd volto-social-blocks
    ```

2.  Install this code base.

    ```shell
    make install
    ```


### 🎯 Make commands

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

### 🔧 Development environment setup

Install all package requirements:

```shell
make install
```

### 🚀 Start developing

Start the backend in one terminal:

```shell
make backend-docker-start
```

In a separate terminal session, start the frontend:

```shell
make start
```

### 🧹 Lint code

Run ESlint, Prettier, and Stylelint in analyze mode:

```shell
make lint
```

### ✨ Format code

Run ESlint, Prettier, and Stylelint in fix mode:

```shell
make format
```

### 🌍 Internationalization (i18n)

Extract i18n messages to locales:

```shell
make i18n
```

### 🧪 Unit tests

Run unit tests:

```shell
make test
```

### 🎯 Run Cypress acceptance tests

Run each command in separate terminal sessions:

**Terminal 1:** Start the frontend in development mode:

```shell
make acceptance-frontend-dev-start
```

**Terminal 2:** Start the backend acceptance server:

```shell
make acceptance-backend-start
```

**Terminal 3:** Start the Cypress interactive test runner:

```shell
make acceptance-test
```

## 💡 Credits

The development of this add-on was sponsored by kitconcept GmbH.

![kitconcept GmbH](https://raw.githubusercontent.com/kitconcept/volto-form-builder/master/kitconcept.png)

## 📄 License

The project is licensed under the MIT license.
