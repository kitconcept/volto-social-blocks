import React from 'react';
import TwitchView from './DefaultView';
import Wrapper from '@plone/volto/storybook';

const withWrapper = (Story, { args }) => {
  return (
    <Wrapper anonymous>
      <div style={{ width: '1000px' }}>
        <Story {...args} />
      </div>
    </Wrapper>
  );
};

export default {
  title: 'Public/Blocks/TwitchBlock',
  component: TwitchView,
  decorators: [withWrapper],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'Embeds Twitch channels, videos, or clips using the Twitch player iframe. Chat is only available for channels.',
      },
    },
  },
  argTypes: {
    twitchUrl: {
      name: 'Twitch URL',
      control: 'text',
    },
    showChat: {
      name: 'Show Chat',
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
    twitchUrl: 'https://www.twitch.tv/gamesdonequick',
    showChat: false,
    align: 'center',
    size: 'l',
  },
};

export const Channel = {
  args: {
    twitchUrl: 'https://www.twitch.tv/gamesdonequick',
    showChat: false,
    align: 'center',
    size: 'l',
  },
};

export const ChannelWithChat = {
  args: {
    twitchUrl: 'https://www.twitch.tv/gamesdonequick',
    showChat: true,
    align: 'center',
    size: 'l',
  },
};

export const Video = {
  args: {
    twitchUrl: 'https://www.twitch.tv/videos/1234567890',
    showChat: false,
    align: 'center',
    size: 'l',
  },
};
