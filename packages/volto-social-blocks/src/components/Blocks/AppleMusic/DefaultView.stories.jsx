import React from 'react';
import AppleMusicView from './DefaultView';
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
  title: 'Public/Blocks/AppleMusicBlock',
  component: AppleMusicView,
  decorators: [withWrapper],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'Embeds Apple Music or Apple Podcasts content using an iframe. Use the alignment and size controls to preview layout.',
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
    appleMusicUrl: 'https://music.apple.com/us/album/1989-taylors-version/1708308989',
    align: 'center',
    size: 'l',
  },
};

export const MusicAlbum = {
  args: {
    appleMusicUrl: 'https://music.apple.com/us/album/1989-taylors-version/1708308989',
    align: 'center',
    size: 'l',
  },
};

export const Podcast = {
  args: {
    appleMusicUrl: 'https://podcasts.apple.com/us/podcast/the-daily/id1200361736',
    align: 'center',
    size: 'l',
  },
};
