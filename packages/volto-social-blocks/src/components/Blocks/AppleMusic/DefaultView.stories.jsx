import React from 'react';
import AppleMusicView from './DefaultView';
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
  title: 'Public/Blocks/AppleMusicBlock',
  component: AppleMusicView,
  decorators: [withWrapper],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: `
# Apple Music Block

Embed songs, albums, and playlists from Apple Music directly into your Plone pages.

## Features

- **Responsive sizes**: Three sizes available (small, medium, large)
- **Flexible alignment**: Left, center, or right alignment
- **Audio preview**: Embedded player with playback controls
- **Support for albums, songs, and playlists**

## How to use

1. Add the Apple Music block to your page
2. Paste an Apple Music URL (song, album, or playlist)
3. Adjust size and alignment as needed
4. The content will be automatically embedded
        `,
      },
    },
  },
  argTypes: {
    appleMusicUrl: {
      name: 'Apple Music/Podcast URL',
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
    appleMusicUrl:
      'https://music.apple.com/us/album/1989-taylors-version/1708308989',
    align: 'center',
    size: 'l',
  },
};

export const MusicAlbum = {
  args: {
    appleMusicUrl:
      'https://music.apple.com/us/album/1989-taylors-version/1708308989',
    align: 'center',
    size: 'l',
  },
};

export const Podcast = {
  args: {
    appleMusicUrl:
      'https://podcasts.apple.com/us/podcast/the-daily/id1200361736',
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
