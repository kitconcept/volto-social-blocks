import { defineMessages } from 'react-intl';

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

export const facebookSchema = (props) => {
  return {
    title: props.intl.formatMessage(messages.facebookBlock),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['facebookId'],
      },
      {
        id: 'style',
        title: props.intl.formatMessage(messages.styleFieldset),
        fields: ['align', 'size'],
      },
    ],

    properties: {
      facebookId: {
        title: props.intl.formatMessage(messages.facebookId),
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
    required: ['facebookId'],
  };
};
