import React from 'react';
import ThreadsView from './DefaultView';
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
  title: 'Public/Blocks/ThreadsBlock',
  component: ThreadsView,
  decorators: [withWrapper],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'Embeds a Threads post using an iframe. Use alignment and size to preview layout.',
      },
    },
  },
  argTypes: {
    threadsUrl: {
      name: 'Threads URL',
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
    threadsUrl: 'https://www.threads.net/@zuck/post/C9gJOdKu8Gw',
    align: 'center',
    size: 'l',
  },
};

export const Default = {
  args: {
    threadsUrl: 'https://www.threads.net/@zuck/post/C9gJOdKu8Gw',
    align: 'center',
    size: 'l',
  },
};
