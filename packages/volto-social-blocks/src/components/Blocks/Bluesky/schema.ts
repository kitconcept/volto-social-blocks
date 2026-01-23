import { defineMessages } from 'react-intl';
import type { BlockSchemaProps, JSONSchema } from '@plone/types';

const messages = defineMessages({
  blueskyBlock: {
    id: 'Bluesky',
    defaultMessage: 'Bluesky',
  },
  blueskyUrl: {
    id: 'Bluesky url',
    defaultMessage: 'Bluesky url',
  },
  align: {
    id: 'Alignment',
    defaultMessage: 'Alignment',
  },
  size: {
    id: 'Size',
    defaultMessage: 'Size',
  },
  colorMode: {
    id: 'Color mode',
    defaultMessage: 'Color mode',
  },
  colorModeSystem: {
    id: 'System',
    defaultMessage: 'System',
  },
  colorModeLight: {
    id: 'Light',
    defaultMessage: 'Light',
  },
  colorModeDark: {
    id: 'Dark',
    defaultMessage: 'Dark',
  },
  styleFieldset: {
    id: 'Style',
    defaultMessage: 'Style',
  },
});

export const blueskySchema = (props: BlockSchemaProps): JSONSchema => {
  const { intl } = props;

  return {
    title: intl.formatMessage(messages.blueskyBlock),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['blueskyUrl'],
      },
      {
        id: 'style',
        title: intl.formatMessage(messages.styleFieldset),
        fields: ['align', 'size', 'colorMode'],
      },
    ],

    properties: {
      blueskyUrl: {
        title: intl.formatMessage(messages.blueskyUrl),
      },
      align: {
        title: intl.formatMessage(messages.align),
        widget: 'align',
        actions: ['left', 'right', 'center'],
      },
      size: {
        title: intl.formatMessage(messages.size),
        widget: 'image_size',
      },
      colorMode: {
        title: intl.formatMessage(messages.colorMode),
        choices: [
          ['system', intl.formatMessage(messages.colorModeSystem)],
          ['light', intl.formatMessage(messages.colorModeLight)],
          ['dark', intl.formatMessage(messages.colorModeDark)],
        ],
        default: 'system',
        noValueOption: false,
      },
    },
    required: ['blueskyUrl'],
  };
};
