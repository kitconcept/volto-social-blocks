# Contributing to volto-social-blocks

## Run local development

To start an environment for developing this package, run:

```shell
make dev
```

This will start two containers:

* Volto frontend on port 3000 (Already with this codebase installed)
* Plone backend on port 8080

Then access http://localhost:3000/

Always stop the backend server with

```shell
make stop-backend
```

## Unit tests

Continuosly run unit tests with:

```shell
make test
```

Or run it just once with

```shell
make test-ci
```

## Acceptance tests

First setup acceptance tests support with

```shell
make install-acceptance
```

Then start the acceptance servers:

```shell
make start-test-acceptance-server
```

And start Cypress with:

```shell
make test-acceptance
```

Stop the acceptance servers:

```shell
make stop-test-acceptance-server
```

## Storybook

Start Storybook server with

```shell
make start-storybook
```

Then access http://localhost:6006/
