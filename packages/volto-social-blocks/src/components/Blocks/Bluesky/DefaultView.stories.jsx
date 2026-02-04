import React from 'react';
import BlueskyDefaultView from './DefaultView';

export default {
  title: 'Public/Blocks/BlueskyBlock',
  component: BlueskyDefaultView,
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: `
# Bluesky Block

Embed posts from the Bluesky social network directly into your Plone pages.

## Features

- **Responsive sizes**: Three sizes available (small, medium, large)
- **Flexible alignment**: Left, center, or right alignment
- **Theme options**: System, light, or dark mode
- **Official embed service**: Uses embed.bsky.app

## How to use

1. Add the Bluesky block to your page
2. Paste a Bluesky post URL
3. Configure color mode and alignment
4. The post will be automatically embedded
        `,
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
  args: {
    blueskyUrl:
      'https://bsky.app/profile/lindalebrun.bsky.social/post/3mcsfdj5i6224',
    align: 'center',
    size: 'l',
    colorMode: 'system',
  },
};

export const SystemMode = {
  args: {
    colorMode: 'system',
  },
};
export const LightMode = {
  args: {
    colorMode: 'light',
  },
};
export const DarkMode = {
  args: {
    colorMode: 'dark',
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
    align: 'center',
    size: 'l',
  },
};
export const AlignRight = {
  args: {
    align: 'right',
    size: 'l',
  },
};
