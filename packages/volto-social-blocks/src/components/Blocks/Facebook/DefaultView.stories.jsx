import React from 'react';
import FacebookView from './DefaultView';
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
  title: 'Public/Blocks/FacebookBlock',
  component: FacebookView,
  decorators: [withWrapper],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: `
# Facebook Block

Embed Facebook posts and videos directly into your Plone pages.

## Features

- **Responsive sizes**: Three sizes available (small, medium, large)
- **Flexible alignment**: Left, center, or right alignment
- **Support for posts and videos**
- **Native Facebook embed player**

## How to use

1. Add the Facebook block to your page
2. Paste a Facebook post or video URL
3. Adjust size and alignment as needed
4. The content will be automatically embedded
        `,
      },
    },
  },
  argTypes: {
    facebookId: {
      name: 'Facebook ID',
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
    facebookId:
      'https://m.facebook.com/story.php?story_fbid=pfbid08AKg1aseCjJek1nrRL8hXRCFe6v645pJt15as4Vm1YG2MjoGkFZ1biA6hmHX6qfql&id=100067147516508&sfnsn=wiwspmo&mibextid=RUbZ1f',
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
