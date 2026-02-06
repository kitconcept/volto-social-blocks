import React from 'react';
import TwitchView from './DefaultView';
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
  title: 'Public/Blocks/TwitchBlock',
  component: TwitchView,
  decorators: [withWrapper],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: `
# Twitch Block

Embed Twitch videos, clips, and live streams directly into your Plone pages.

## Features

- **Responsive sizes**: Three sizes available (small, medium, large)
- **Flexible alignment**: Left, center, or right alignment
- **Multiple content types**: Channels (live), videos, and clips
- **Chat option**: Optional chat panel for channel streams
- **Official Twitch player**: Full video controls and quality options

## How to use

1. Add the Twitch block to your page
2. Paste a Twitch channel, video, or clip URL
3. Toggle chat visibility (for channels)
4. Adjust size and alignment as needed
5. The content will be automatically embedded
        `,
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
