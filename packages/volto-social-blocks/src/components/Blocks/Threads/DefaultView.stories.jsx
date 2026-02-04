import React from 'react';
import ThreadsView from './DefaultView';
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
  title: 'Public/Blocks/ThreadsBlock',
  component: ThreadsView,
  decorators: [withWrapper],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: `
# Threads Block

Embed posts from Meta's Threads platform directly into your Plone pages.

## Features

- **Responsive sizes**: Three sizes available (small, medium, large)
- **Flexible alignment**: Left, center, or right alignment
- **Official Threads embed**: Native iframe integration
- **Connected to Instagram**: Share from your Instagram-linked account

## How to use

1. Add the Threads block to your page
2. Paste a Threads post URL
3. Adjust size and alignment as needed
4. The post will be automatically embedded
        `,
      },
    },
  },
  argTypes: {
    threadsUrl: {
      name: 'Threads URL',
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
    threadsUrl:
      'https://www.threads.com/@corinthiansfutebolfeminino/post/DUF9FrDCGp6?hl=pt-br',
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
