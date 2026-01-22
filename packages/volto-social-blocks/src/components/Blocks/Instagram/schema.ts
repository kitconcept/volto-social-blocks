import { defineMessages } from 'react-intl';
import type { JSONSchema } from '@plone/types';
import type { BlockSchemaProps } from '@plone/types';

const messages = defineMessages({
  instagramBlock: {
    id: 'Instagram',
    defaultMessage: 'Instagram',
  },
  instagramId: {
    id: 'Instagram url',
    defaultMessage: 'Instagram url',
  },
  align: {
    id: 'Alignment',
    defaultMessage: 'Alignment',
  },
  size: {
    id: 'Size',
    defaultMessage: 'Size',
  },
  captioned: {
    id: 'Captioned',
    defaultMessage: 'Captioned',
  },
  styleFieldset: {
    id: 'Style',
    defaultMessage: 'Style',
  },
});

export const instagramSchema = (props: BlockSchemaProps): JSONSchema => {
  const { intl } = props;
  return {
    title: intl.formatMessage(messages.instagramBlock),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['instagramId'],
      },
      {
        id: 'style',
        title: intl.formatMessage(messages.styleFieldset),
        fields: ['align', 'size', 'captioned'],
      },
    ],

    properties: {
      instagramId: {
        title: intl.formatMessage(messages.instagramId),
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
      captioned: {
        title: intl.formatMessage(messages.captioned),
        type: 'boolean',
        default: true,
      },
    },
    required: ['instagramId'],
  };
};
