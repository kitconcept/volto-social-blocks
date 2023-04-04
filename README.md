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

## Credits

The development of this add-on was sponsored by kitconcept GmbH.

![kitconcept GmbH](https://raw.githubusercontent.com/kitconcept/volto-form-builder/master/kitconcept.png)

## License

The project is licensed under the MIT license.
