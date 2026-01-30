import { defineMessages } from 'react-intl';
import type { JSONSchema } from '@plone/types';
import type { BlockSchemaProps } from '@plone/types';

const messages = defineMessages({
  twitchBlock: {
    id: 'Twitch',
    defaultMessage: 'Twitch',
  },
  twitchUrl: {
    id: 'Twitch url',
    defaultMessage: 'Twitch url',
  },
  showChat: {
    id: 'Show chat',
    defaultMessage: 'Show chat',
  },
  align: {
    id: 'Alignment',
    defaultMessage: 'Alignment',
  },
  size: {
    id: 'Size',
    defaultMessage: 'Size',
  },
  styleFieldset: {
    id: 'Style',
    defaultMessage: 'Style',
  },
});

export const twitchSchema = (props: BlockSchemaProps): JSONSchema => {
  const { intl } = props;
  return {
    title: intl.formatMessage(messages.twitchBlock),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['twitchUrl', 'showChat'],
      },
      {
        id: 'style',
        title: intl.formatMessage(messages.styleFieldset),
        fields: ['align', 'size'],
      },
    ],

    properties: {
      twitchUrl: {
        title: intl.formatMessage(messages.twitchUrl),
      },
      showChat: {
        title: intl.formatMessage(messages.showChat),
        type: 'boolean',
        default: false,
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
    },
    required: ['twitchUrl'],
  };
};
