import React from 'react';
import MastodonView from './DefaultView';
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
  title: 'Public/Blocks/MastodonBlock',
  component: MastodonView,
  decorators: [withWrapper],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'Embeds a Mastodon status using an iframe. The embed script may resize the iframe; use the size control to change the preview width.',
      },
    },
  },
  argTypes: {
    mastodonUrl: {
      name: 'Mastodon URL',
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
    mastodonUrl: 'https://mastodon.social/@Mastodon/99664645266851984',
    align: 'center',
    size: 'l',
  },
};

export const Default = {
  args: {
    mastodonUrl: 'https://mastodon.social/@Mastodon/99664645266851984',
    align: 'center',
    size: 'l',
  },
};
