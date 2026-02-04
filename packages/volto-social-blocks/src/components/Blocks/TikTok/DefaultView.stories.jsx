import React from 'react';
import TikTokView from './DefaultView';
import Wrapper from '@plone/volto/storybook';

const withWrapper = (Story, { args }) => {
  return (
    <Wrapper anonymous>
      <div style={{ width: '100%', height: '100%' }}>
        <Story {...args} />
      </div>
    </Wrapper>
  );
};

export default {
  title: 'Public/Blocks/TikTokBlock',
  component: TikTokView,
  decorators: [withWrapper],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: `
# TikTok Block

Embed TikTok videos directly into your Plone pages.

## Features

- **Responsive layout**: Automatically adapts to screen size
- **Flexible alignment**: Left, center, or right alignment
- **Native TikTok player**: Full video playback with controls
- **Maximum width constraint**: Optimized for readability

## How to use

1. Add the TikTok block to your page
2. Paste a TikTok video URL
3. Adjust alignment as needed
4. The video will be automatically embedded
        `,
      },
    },
  },
  argTypes: {
    tiktokUrl: {
      name: 'TikTok URL',
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

export const AlignLeft = {
  args: {
    align: 'left',
  },
};
export const AlignCenter = {
  args: {
    align: 'center',
  },
};
export const AlignRight = {
  args: {
    align: 'right',
  },
};
