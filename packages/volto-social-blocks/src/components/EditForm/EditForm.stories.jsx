import React from 'react';
import EditForm from './EditForm';
import Wrapper from '@plone/volto/storybook';
import iconSVG from '../../icons/twitter.svg';
import './EditForm.css';

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
  title: 'Public/Components/EditForm',
  component: EditForm,
  decorators: [withWrapper],
  argTypes: {
    formHeader: {
      name: 'Form Header',
      control: 'text',
    },
    formPlaceholder: {
      name: 'Form Header',
      control: 'text',
    },
    errorMessage: {
      name: 'Error message',
      control: 'text',
    },
    value: {
      name: 'Tweet ID',
      control: 'text',
    },
    invalidValue: {
      name: 'Invalid Value',
      control: 'boolean',
    },
  },
  args: {
    formHeader: 'Embed a Tweet',
    formPlaceholder: 'Provide a url to the Tweet or the Tweet ID',
    errorMessage: 'Please provide a valid Tweet ID or Twitter URL',
    formIcon: iconSVG,
    value: '',
    invalidValue: false,
  },
};

export const Form = {
  args: {
    value: '',
  },
};

export const FormWithValue = {
  args: {
    value: '1542568225527005184',
  },
};

export const FormWithErrors = {
  args: {
    value: 'foo',
    invalidValue: true,
  },
};
