import React from 'react';
import TikTokView from './DefaultView';
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
  title: 'Public/Blocks/TikTokBlock',
  component: TikTokView,
  decorators: [withWrapper],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'Embeds a TikTok post using react-social-media-embed. The component is responsive and constrained to a maximum width.',
      },
    },
  },
  argTypes: {
    tiktokUrl: {
      name: 'TikTok URL',
      control: 'text',
    },
    align: {
      name: 'Alignment',
      control: 'select',
      options: ['center', 'left', 'right'],
    },
  },
  args: {
    tiktokUrl: 'https://www.tiktok.com/@scout2015/video/6718335390845095173',
    align: 'center',
  },
};

export const Default = {};
