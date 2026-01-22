import { defineMessages } from 'react-intl';
import type { JSONSchema } from '@plone/types';
import type { BlockSchemaProps } from '@plone/types';

const messages = defineMessages({
  soundcloudBlock: {
    id: 'Soundcloud',
    defaultMessage: 'Soundcloud',
  },
  soundcloudId: {
    id: 'Soundcloud id',
    defaultMessage: 'Soundcloud id',
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

export const soundcloudSchema = (props: BlockSchemaProps): JSONSchema => {
  const { intl } = props;
  return {
    title: intl.formatMessage(messages.soundcloudBlock),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['soundcloudId'],
      },
      {
        id: 'style',
        title: intl.formatMessage(messages.styleFieldset),
        fields: ['align', 'size'],
      },
    ],

    properties: {
      soundcloudId: {
        title: intl.formatMessage(messages.soundcloudId),
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
    required: ['soundcloudId'],
  };
};
