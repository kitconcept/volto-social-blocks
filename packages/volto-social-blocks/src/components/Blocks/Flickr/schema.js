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
        fields: ['align'],
      },
    ],

    properties: {
      flickrId: {
        title: props.intl.formatMessage(messages.flickrId),
      },
      align: {
        title: props.intl.formatMessage(messages.align),
        widget: 'align',
      },
    },
    required: ['flickrId'],
  };
};
