import React from 'react';
import BlueskyDefaultView from './DefaultView';

export default {
  title: 'Blocks/Bluesky',
  component: BlueskyDefaultView,
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'Embeds a Bluesky post using the official embed service (embed.bsky.app). The embed may dynamically adjust its height.',
      },
    },
  },
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
