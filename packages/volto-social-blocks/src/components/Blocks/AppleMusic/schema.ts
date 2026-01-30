import { defineMessages } from 'react-intl';
import type { JSONSchema } from '@plone/types';
import type { BlockSchemaProps } from '@plone/types';

const messages = defineMessages({
  appleMusicBlock: {
    id: 'Apple Music',
    defaultMessage: 'Apple Music',
  },
  appleMusicUrl: {
    id: 'Apple Music/Podcast url',
    defaultMessage: 'Apple Music/Podcast url',
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

export const appleMusicSchema = (props: BlockSchemaProps): JSONSchema => {
  const { intl } = props;
  return {
    title: intl.formatMessage(messages.appleMusicBlock),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['appleMusicUrl'],
      },
      {
        id: 'style',
        title: intl.formatMessage(messages.styleFieldset),
        fields: ['align', 'size'],
      },
    ],

    properties: {
      appleMusicUrl: {
        title: intl.formatMessage(messages.appleMusicUrl),
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
    required: ['appleMusicUrl'],
  };
};
