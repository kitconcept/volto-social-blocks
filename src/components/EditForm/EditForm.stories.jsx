import { injectIntl } from 'react-intl';
import React from 'react';
import EditForm from './EditForm';
import Wrapper from '@plone/volto/storybook';
import './EditForm.css';

const StoryComponent = injectIntl(({ children, ...args }) => {
  return (
    <Wrapper>
      <div style={{ maxWidth: '1000px', margin: 'auto' }}>
        <EditForm {...args} />
      </div>
    </Wrapper>
  );
});

export const Form = StoryComponent.bind({});
Form.args = {
  value: '',
};

export const FormWithValue = StoryComponent.bind({});
FormWithValue.args = {
  value: '1542568225527005184',
};

export const FormWithErrors = StoryComponent.bind({});
FormWithErrors.args = {
  value: 'foo',
  invalidValue: true,
};

export default {
  title: 'Public/Blocks/TweetBlock/Edit',
  component: EditForm,
  argTypes: {
    value: {
      name: 'Tweet ID',
      defaultValue: '',
      control: {
        type: 'text',
      },
    },
    invalidValue: {
      name: 'Invalid Value',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
  },
};
