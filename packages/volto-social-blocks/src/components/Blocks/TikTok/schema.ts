import { defineMessages } from 'react-intl';
import type { BlockSchemaProps, JSONSchema } from '@plone/types';

const messages = defineMessages({
  tiktokBlock: {
    id: 'TikTok',
    defaultMessage: 'TikTok',
  },
  tiktokUrl: {
    id: 'TikTok url',
    defaultMessage: 'TikTok url',
  },
  align: {
    id: 'Alignment',
    defaultMessage: 'Alignment',
  },
  styleFieldset: {
    id: 'Style',
    defaultMessage: 'Style',
  },
});

export const tiktokSchema = (props: BlockSchemaProps): JSONSchema => {
  const { intl } = props;

  return {
    title: intl.formatMessage(messages.tiktokBlock),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['tiktokUrl'],
      },
      {
        id: 'style',
        title: intl.formatMessage(messages.styleFieldset),
        fields: ['align'],
      },
    ],
    properties: {
      tiktokUrl: {
        title: intl.formatMessage(messages.tiktokUrl),
      },
      align: {
        title: intl.formatMessage(messages.align),
        widget: 'align',
        actions: ['left', 'right', 'center'],
      },
    },
    required: ['tiktokUrl'],
  };
};
