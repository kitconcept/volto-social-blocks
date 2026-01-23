import React from 'react';
import TikTokView from './DefaultView';
import Wrapper from '@plone/volto/storybook';

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
  title: 'Public/Blocks/TikTokBlock',
  component: TikTokView,
  decorators: [withWrapper],
  argTypes: {
    tiktokUrl: {
      name: 'TikTok url',
      control: 'text',
    },
    align: {
      name: 'Alignment',
      control: 'select',
      options: ['center', 'left', 'right'],
    },
  },
  args: {
    tiktokUrl: 'https://www.tiktok.com/@scout2015/video/6718335390845095173',
    align: 'center',
  },
};

export const Default = {};
