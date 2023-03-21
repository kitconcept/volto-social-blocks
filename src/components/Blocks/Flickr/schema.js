import { defineMessages } from 'react-intl';

const messages = defineMessages({
  flickrBlock: {
    id: 'Flickr',
    defaultMessage: 'Flickr',
  },
  flickrId: {
    id: 'Flickr url',
    defaultMessage: 'Flickr url',
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

export const flickrSchema = (props) => {
  return {
    title: props.intl.formatMessage(messages.flickrBlock),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['flickrId'],
      },
      {
        id: 'style',
        title: props.intl.formatMessage(messages.styleFieldset),
        fields: ['captioned', 'align', 'size'],
      },
    ],

    properties: {
      flickrId: {
        title: props.intl.formatMessage(messages.flickrId),
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
    required: ['flickrId'],
  };
};
