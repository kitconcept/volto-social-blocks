import { defineMessages } from 'react-intl';
import type { BlockSchemaProps, JSONSchema } from '@plone/types';

const messages = defineMessages({
  pinterestBlock: {
    id: 'Pinterest',
    defaultMessage: 'Pinterest',
  },
  pinterestUrl: {
    id: 'Pinterest url',
    defaultMessage: 'Pinterest url',
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

export const pinterestSchema = (props: BlockSchemaProps): JSONSchema => {
  const { intl } = props;

  return {
    title: intl.formatMessage(messages.pinterestBlock),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['pinterestUrl'],
      },
      {
        id: 'style',
        title: intl.formatMessage(messages.styleFieldset),
        fields: ['align', 'size'],
      },
    ],
    properties: {
      pinterestUrl: {
        title: intl.formatMessage(messages.pinterestUrl),
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
    required: ['pinterestUrl'],
  };
};
