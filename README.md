# Social Blocks for Volto (@kitconcept/volto-social-blocks)

Addon implementing social network blocks for [Plone](https://plone.org) projects with [Volto](https://github.com/plone/volto).

[![npm](https://img.shields.io/npm/v/@kitconcept/volto-social-blocks)](https://www.npmjs.com/package/@kitconcept/volto-social-blocks)
[![](https://img.shields.io/badge/-Storybook-ff4785?logo=Storybook&logoColor=white&style=flat-square)](https://kitconcept.github.io/volto-social-blocks/)
[![Code analysis checks](https://github.com/kitconcept/volto-social-blocks/actions/workflows/code.yml/badge.svg)](https://github.com/kitconcept/volto-social-blocks/actions/workflows/code.yml)
[![Unit tests](https://github.com/kitconcept/volto-social-blocks/actions/workflows/unit.yml/badge.svg)](https://github.com/kitconcept/volto-social-blocks/actions/workflows/unit.yml)

## Features

- Tweet block
- Instagram block
- Facebook block

## Install

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

### Custom Privacy Consent Notice

You can register a custom React component to check for privacy consent and show the user a prompt to confirm accessing the external services. This is useful to meet European GDPR requirements, for example.

```
config.registerComponent({
  name: 'CheckPrivacyConsent',
  component: IfConfirm,  # use your own component here
});
```

The [@kitconcept/volto-dsgvo-banner](https://github.com/kitconcept/volto-dsgvo-banner) addon provides one possible implementation of the `CheckPrivacyConsent` component.

## Development

The development of this add-on is done in isolation using a new approach using pnpm workspaces and latest `mrs-developer` and other Volto core improvements.
For this reason, it only works with pnpm and Volto 18 (currently in alpha)

### Requisites

- Volto 18 (2024-03-21: currently in alpha)
- pnpm as package manager

### Make convenience commands

Run `make help` to list the available commands.

```text
help                                 Show this help
install                              Installs the dev environment using mrs-developer
i18n                                 Sync i18n
format                               Format codebase
lint                                 Lint Codebase
test                                 Run unit tests
test-ci                              Run unit tests in CI
start-backend-docker                 Starts a Docker-based backend for developing
start-test-acceptance-frontend-dev   Start acceptance frontend in dev mode
start-test-acceptance-frontend       Start acceptance frontend in prod mode
start-test-acceptance-server         Start acceptance server
test-acceptance                      Start Cypress in interactive mode
test-acceptance-headless             Run cypress tests in headless mode for CI
```

### Development Environment Setup

Install package requirements

```shell
pnpm i
make install
pnpm i
```

### Start developing

Run (in separate terminal sessions)

Start backend server

```shell
make start-backend-docker
```

Start frontend

```shell
pnpm start
```

### Linting

Run ESlint, Prettier and Stylelint

```shell
make lint
```

### Formatting

Run ESlint, Prettier and Stylelint in fix mode

```shell
make format
```

### i18n

Extract the i18n messages to locales

```shell
make i18n
```

### Unit tests

Run unit tests

```shell
make test
```

### Run Cypress tests

Run (in separate terminal sessions)

Start the frontend in dev mode

```shell
make start-test-acceptance-frontend-dev
```

Start the backend acceptance server

```shell
make start-test-acceptance-server
```

Start the Cypress interactive test runner

```shell
make test-acceptance
```

## Credits

The development of this add-on was sponsored by kitconcept GmbH.

![kitconcept GmbH](https://raw.githubusercontent.com/kitconcept/volto-form-builder/master/kitconcept.png)

## License

The project is licensed under the MIT license.
