import React from 'react';
import Wrapper from '@plone/volto/storybook';
import BlueskyDefaultView from './DefaultView';

const withWrapper = (Story, { args }) => {
  return (
    <Wrapper anonymous>
      <div style={{ width: '1000px' }}>
        <Story {...args} />
      </div>
    </Wrapper>
  );
};

export default {
  title: 'Public/Blocks/Bluesky',
  component: BlueskyDefaultView,
  decorators: [withWrapper],
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
  args: {
    blueskyUrl: 'https://bsky.app/profile/plone.org/post/3mddkocpicz2t',
    align: 'center',
    size: 'l',
    colorMode: 'system',
  },
};

export const Small = {
  args: {
    size: 's',
  },
};
export const Medium = {
  args: {
    size: 'm',
  },
};
export const Large = {
  args: {
    size: 'l',
  },
};
export const AlignLeft = {
  args: {
    align: 'left',
    size: 'l',
  },
};
export const AlignCenter = {
  args: {
    align: 'left',
    size: 'l',
  },
};
export const AlignRight = {
  args: {
    align: 'right',
    size: 'l',
  },
};
