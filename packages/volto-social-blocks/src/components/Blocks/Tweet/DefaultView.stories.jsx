import React from 'react';
import TweetView from './DefaultView';
import { langCodes } from './languages';
import Wrapper from '@plone/volto/storybook';

const withWrapper = (Story, { args }) => {
  return (
    <Wrapper anonymous>
      <div style={{ width: '400px' }}>
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
        component:
          'Embeds an X/Twitter post. Use theme, language and alignment to preview the embed configuration.',
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
