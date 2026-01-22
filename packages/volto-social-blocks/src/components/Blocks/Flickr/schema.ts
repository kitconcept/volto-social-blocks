import { defineMessages } from 'react-intl';
import type { JSONSchema } from '@plone/types';
import type { BlockSchemaProps } from '@plone/types';

const messages = defineMessages({
  flickrBlock: {
    id: 'Flickr',
    defaultMessage: 'Flickr',
  },
  flickrId: {
    id: 'Flickr embed code',
    defaultMessage: 'Flickr embed code',
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

export const flickrSchema = (props: BlockSchemaProps): JSONSchema => {
  const { intl } = props;
  return {
    title: intl.formatMessage(messages.flickrBlock),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['flickrId'],
      },
      {
        id: 'style',
        title: intl.formatMessage(messages.styleFieldset),
        fields: ['align'],
      },
    ],

    properties: {
      flickrId: {
        title: intl.formatMessage(messages.flickrId),
      },
      align: {
        title: intl.formatMessage(messages.align),
        widget: 'align',
        actions: ['left', 'right', 'center'],
      },
    },
    required: ['flickrId'],
  };
};
