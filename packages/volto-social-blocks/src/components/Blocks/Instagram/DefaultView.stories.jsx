import React from 'react';
import InstagramView from './DefaultView';
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
  title: 'Public/Blocks/InstagramBlock',
  component: InstagramView,
  decorators: [withWrapper],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: `
# Instagram Block

Embed Instagram posts (photos and videos) directly into your Plone pages.

## Features

- **Responsive sizes**: Three sizes available (small, medium, large)
- **Flexible alignment**: Left, center, or right alignment
- **Caption option**: Show or hide post captions
- **Support for photos and videos**

## How to use

1. Add the Instagram block to your page
2. Paste an Instagram post URL
3. Toggle caption visibility if needed
4. Adjust size and alignment
5. The post will be automatically embedded
        `,
      },
    },
  },
  argTypes: {
    instagramId: {
      name: 'Instagram ID',
      control: 'text',
    },
    captioned: {
      name: 'Captioned',
      control: 'boolean',
    },
    align: {
      name: 'Alignment',
      control: 'select',
      options: ['center', 'left', 'right'],
    },
    size: {
      name: 'Size',
      control: 'select',
      options: ['s', 'm', 'l'],
    },
  },
  args: {
    instagramId: 'https://www.instagram.com/p/CjTBnwju6XY/',
    captioned: true,
    align: 'center',
    size: 'l',
  },
};

export const Caption = {
  args: {
    captioned: true,
  },
};
export const WithoutCaption = {
  args: {
    captioned: false,
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
