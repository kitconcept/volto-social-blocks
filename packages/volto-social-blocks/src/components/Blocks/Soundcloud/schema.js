import { defineMessages } from 'react-intl';

const messages = defineMessages({
  soundcloudBlock: {
    id: 'Soundcloud',
    defaultMessage: 'Soundcloud',
  },
  soundcloudId: {
    id: 'Soundcloud url',
    defaultMessage: 'Soundcloud url',
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

export const soundcloudSchema = (props) => {
  return {
    title: props.intl.formatMessage(messages.soundcloudBlock),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['soundcloudId'],
      },
      {
        id: 'style',
        title: props.intl.formatMessage(messages.styleFieldset),
        fields: ['align', 'size'],
      },
    ],

    properties: {
      soundcloudId: {
        title: props.intl.formatMessage(messages.soundcloudId),
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
    },
    required: ['soundcloudId'],
  };
};
