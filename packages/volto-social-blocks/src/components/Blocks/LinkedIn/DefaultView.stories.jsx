import React from 'react';
import LinkedInView from './DefaultView';
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
  title: 'Public/Blocks/LinkedInBlock',
  component: LinkedInView,
  decorators: [withWrapper],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: `
# LinkedIn Block

Embed LinkedIn posts directly into your Plone pages.

## Features

- **Responsive sizes**: Three sizes available (small, medium, large)
- **Flexible alignment**: Left, center, or right alignment
- **Official LinkedIn embed**: Native post display
- **Professional content**: Share business updates and articles

## How to use

1. Add the LinkedIn block to your page
2. Paste a LinkedIn post URL
3. Adjust size and alignment as needed
4. The post will be automatically embedded
        `,
      },
    },
  },
  argTypes: {
    postURL: {
      name: 'Post URL',
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
    postURL:
      'https://www.linkedin.com/embed/feed/update/urn:li:share:7318254492443979777',
    align: 'center',
    size: 'l',
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
