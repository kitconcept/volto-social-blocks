import { defineMessages } from 'react-intl';
import type { JSONSchema } from '@plone/types';
import type { BlockSchemaProps } from '@plone/types';

const messages = defineMessages({
  spotifyBlock: {
    id: 'Spotify',
    defaultMessage: 'Spotify',
  },
  spotifyId: {
    id: 'Spotify url',
    defaultMessage: 'Spotify url',
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

export const spotifySchema = (props: BlockSchemaProps): JSONSchema => {
  const { intl } = props;
  return {
    title: intl.formatMessage(messages.spotifyBlock),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['spotifyId'],
      },
      {
        id: 'style',
        title: intl.formatMessage(messages.styleFieldset),
        fields: ['align', 'size', 'colorMode'],
      },
    ],

    properties: {
      spotifyId: {
        title: intl.formatMessage(messages.spotifyId),
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
    required: ['spotifyId'],
  };
};
