import { injectIntl } from 'react-intl';
import React from 'react';
import TweetView from './DefaultView';
import { langCodes } from './languages';
import Wrapper from '@plone/volto/storybook';

const StoryComponent = injectIntl(({ children, ...args }) => {
  return (
    <Wrapper>
      <div>
        <TweetView {...args} />
      </div>
    </Wrapper>
  );
});

export const LightTheme = StoryComponent.bind({});
LightTheme.args = {
  theme: 'light',
};

export const DarkTheme = StoryComponent.bind({});
DarkTheme.args = {
  theme: 'dark',
};

export const Small = StoryComponent.bind({});
Small.args = {
  size: 's',
  theme: 'light',
};

export const Medium = StoryComponent.bind({});
Medium.args = {
  size: 'm',
  theme: 'light',
};

export const Large = StoryComponent.bind({});
Large.args = {
  size: 'l',
  theme: 'light',
};

export const AlignLeft = StoryComponent.bind({});
AlignLeft.args = {
  align: 'left',
  size: 'l',
  theme: 'light',
};

export const AlignCenter = StoryComponent.bind({});
AlignCenter.args = {
  align: 'center',
  size: 'l',
  theme: 'light',
};

export const AlignRight = StoryComponent.bind({});
AlignRight.args = {
  align: 'right',
  size: 'l',
  theme: 'light',
};

export const LanguageEN = StoryComponent.bind({});
LanguageEN.args = {
  lang: 'en',
  size: 'l',
  theme: 'light',
};

export const LanguageDE = StoryComponent.bind({});
LanguageDE.args = {
  lang: 'de',
  size: 'l',
  theme: 'light',
};

export const LanguagePT = StoryComponent.bind({});
LanguagePT.args = {
  lang: 'pt',
  size: 'l',
  theme: 'light',
};

export default {
  title: 'Public/Blocks/TweetBlock/View',
  component: TweetView,
  argTypes: {
    tweetId: {
      name: 'Tweet ID',
      defaultValue: '1542568225527005184',
      control: {
        type: 'text',
      },
    },
    align: {
      name: 'Alignment',
      defaultValue: 'center',
      control: {
        type: 'select',
        options: ['center', 'left', 'right'],
      },
    },
    size: {
      name: 'Size',
      defaultValue: 'l',
      control: {
        type: 'select',
        options: ['s', 'm', 'l'],
      },
    },
    theme: {
      name: 'Theme',
      defaultValue: 'dark',
      control: {
        type: 'select',
        options: ['dark', 'light'],
      },
    },
    lang: {
      name: 'Language',
      defaultValue: 'en',
      control: {
        type: 'select',
        options: langCodes,
      },
    },
    dnt: {
      name: 'Do not track',
      defaultValue: true,
      control: {
        type: 'boolean',
      },
    },
  },
};
