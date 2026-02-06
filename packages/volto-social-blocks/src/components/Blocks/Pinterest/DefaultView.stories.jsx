import React from 'react';
import PinterestView from './DefaultView';
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
  title: 'Public/Blocks/PinterestBlock',
  component: PinterestView,
  decorators: [withWrapper],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: `
# Pinterest Block

Embed Pinterest pins and boards directly into your Plone pages.

## Features

- **Responsive sizes**: Three sizes available (small, medium, large)
- **Flexible alignment**: Left, center, or right alignment
- **Official Pinterest embed**: Uses Pinterest's native embed script
- **Support for pins and boards**

## How to use

1. Add the Pinterest block to your page
2. Paste a Pinterest pin or board URL
3. Adjust size and alignment as needed
4. The pin/board will be automatically embedded
        `,
      },
    },
  },
  argTypes: {
    pinterestUrl: {
      name: 'Pinterest URL',
      control: 'text',
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
    pinterestUrl: 'https://www.pinterest.com/pin/99360735500167749/',
    align: 'center',
    size: 'm',
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
