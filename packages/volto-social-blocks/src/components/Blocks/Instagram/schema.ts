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

export const instagramSchema = (props: any) => {
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
        fields: ['align', 'size', 'captioned'],
      },
    ],

    properties: {
      instagramId: {
        title: props.intl.formatMessage(messages.instagramId),
      },
      align: {
        title: props.intl.formatMessage(messages.align),
        widget: 'align',
        actions: ['left', 'right', 'center'],
      },
      size: {
        title: props.intl.formatMessage(messages.size),
        widget: 'image_size',
      },
      captioned: {
        title: props.intl.formatMessage(messages.captioned),
        type: 'boolean',
        default: true,
      },
    },
    required: ['instagramId'],
  };
};
