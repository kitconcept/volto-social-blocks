import { defineMessages } from 'react-intl';

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

export const instagramSchema = (props) => {
  return {
    title: props.intl.formatMessage(messages.instagramBlock),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['instagramId'],
      },
      {
        id: 'style',
        title: props.intl.formatMessage(messages.styleFieldset),
        fields: ['captioned', 'align', 'size'],
      },
    ],

    properties: {
      instagramId: {
        title: props.intl.formatMessage(messages.instagramId),
      },
      captioned: {
        title: props.intl.formatMessage(messages.captioned),
        default: true,
        type: 'boolean',
      },
      align: {
        title: props.intl.formatMessage(messages.align),
        widget: 'align',
      },
      size: {
        title: props.intl.formatMessage(messages.size),
        widget: 'image_size',
      },
    },
    required: ['instagramId'],
  };
};
