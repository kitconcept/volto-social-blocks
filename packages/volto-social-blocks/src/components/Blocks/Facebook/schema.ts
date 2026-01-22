import { defineMessages } from 'react-intl';
import type { JSONSchema } from '@plone/types';
import type { BlockSchemaProps } from '@plone/types';

const messages = defineMessages({
  facebookBlock: {
    id: 'Facebook',
    defaultMessage: 'Facebook',
  },
  facebookId: {
    id: 'Facebook url',
    defaultMessage: 'Facebook url',
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

export const facebookSchema = (props: BlockSchemaProps): JSONSchema => {
  const { intl } = props;
  return {
    title: intl.formatMessage(messages.facebookBlock),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['facebookId'],
      },
      {
        id: 'style',
        title: intl.formatMessage(messages.styleFieldset),
        fields: ['align', 'size'],
      },
    ],

    properties: {
      facebookId: {
        title: intl.formatMessage(messages.facebookId),
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
    required: ['facebookId'],
  };
};
