import React from 'react';
import TweetView from './DefaultView';
import { langCodes } from './languages';
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
  title: 'Public/Blocks/TweetBlock',
  component: TweetView,
  decorators: [withWrapper],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: `
# X/Twitter Block

Embed posts from X (formerly Twitter) directly into your Plone pages.

## Features

- **Responsive sizes**: Three sizes available (small, medium, large)
- **Flexible alignment**: Left, center, or right alignment
- **Theme options**: Light or dark theme
- **Language support**: Multiple languages available
- **Privacy option**: Do-not-track support

## How to use

1. Add the X/Twitter block to your page
2. Paste a post URL or provide the tweet ID
3. Configure theme, language, and alignment
4. The post will be automatically embedded
        `,
      },
    },
  },
  argTypes: {
    tweetId: {
      name: 'Tweet ID',
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
    theme: {
      name: 'Theme',
      control: 'select',
      options: ['dark', 'light'],
    },
    lang: {
      name: 'Language',
      control: 'select',
      options: langCodes,
    },
    dnt: {
      name: 'Do not track',
      control: 'boolean',
    },
  },
  args: {
    tweetId: '1542568225527005184',
    align: 'center',
    size: 'l',
    theme: 'dark',
    lang: 'en',
    dnt: true,
  },
};

export const LightTheme = {
  args: {
    theme: 'light',
  },
};
export const DarkTheme = {
  args: {
    theme: 'dark',
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
export const LanguageEN = {
  args: {
    lang: 'en',
    size: 'l',
  },
};
export const LanguageDE = {
  args: {
    lang: 'de',
    size: 'l',
  },
};
export const LanguagePT = {
  args: {
    lang: 'pt',
    size: 'l',
  },
};
