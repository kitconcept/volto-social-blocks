import { defineMessages } from 'react-intl';

const messages = defineMessages({
  spotifyBlock: {
    id: 'Spotify',
    defaultMessage: 'Spotify',
  },
  spotifyId: {
    id: 'Spotify url',
    defaultMessage: 'Spotify url',
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

export const spotifySchema = (props: any) => {
  return {
    title: props.intl.formatMessage(messages.spotifyBlock),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['spotifyId'],
      },
      {
        id: 'style',
        title: props.intl.formatMessage(messages.styleFieldset),
        fields: ['align', 'size'],
      },
    ],

    properties: {
      spotifyId: {
        title: props.intl.formatMessage(messages.spotifyId),
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
    required: ['spotifyId'],
  };
};
