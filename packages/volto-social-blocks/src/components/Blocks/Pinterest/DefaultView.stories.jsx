import React from 'react';
import PinterestView from './DefaultView';
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
  title: 'Public/Blocks/PinterestBlock',
  component: PinterestView,
  decorators: [withWrapper],
  argTypes: {
    pinterestUrl: {
      name: 'Pinterest url',
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
    pinterestUrl: 'https://www.pinterest.com/pin/99360735500167749/',
    align: 'center',
    size: 'm',
  },
};

export const Default = {};
