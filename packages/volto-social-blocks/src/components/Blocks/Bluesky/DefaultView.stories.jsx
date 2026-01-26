import React from 'react';
import BlueskyDefaultView from './DefaultView';

export default {
  title: 'Blocks/Bluesky',
  component: BlueskyDefaultView,
  argTypes: {
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
    },
    size: {
      control: { type: 'select' },
      options: ['s', 'm', 'l'],
    },
    colorMode: {
      control: { type: 'select' },
      options: ['system', 'light', 'dark'],
    },
  },
};

const Template = (args) => <BlueskyDefaultView {...args} />;

export const Default = Template.bind({});
Default.args = {
  blueskyUrl:
    'https://bsky.app/profile/lindalebrun.bsky.social/post/3mcsfdj5i6224',
  align: 'center',
  size: 'l',
  colorMode: 'system',
};
