import React from 'react';
import SpotifyView from './DefaultView';
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
  title: 'Public/Blocks/SpotifyBlock',
  component: SpotifyView,
  decorators: [withWrapper],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: `
# Spotify Block

Embed Spotify tracks, albums, playlists, and podcasts directly into your Plone pages.

## Features

- **Responsive sizes**: Three sizes available (small, medium, large)
- **Flexible alignment**: Left, center, or right alignment
- **Multiple content types**: Tracks, albums, playlists, and podcast episodes
- **Native Spotify player**: Full playback controls

## How to use

1. Add the Spotify block to your page
2. Paste a Spotify URL (track, album, playlist, or episode)
3. Adjust size and alignment as needed
4. The content will be automatically embedded
        `,
      },
    },
  },
  argTypes: {
    spotifyId: {
      name: 'Spotify URL',
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
    spotifyId:
      'https://open.spotify.com/episode/0EPE3mFCbNUunN3PFUv1lT?si=1ef7ad30c07744c4',
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
