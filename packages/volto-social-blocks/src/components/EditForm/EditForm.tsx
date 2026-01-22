import React from 'react';
import Icon from '@plone/volto/components/theme/Icon/Icon';
import { Input, Header, Message } from 'semantic-ui-react';
import type { InputOnChangeData } from 'semantic-ui-react';
import './EditForm.css';

export type EditFormProps = {
  formHeader?: string;
  formPlaceholder?: string;
  formErrorMessage?: string;
  formIcon?: string;
  formIconColor?: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData,
  ) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  invalidValue?: boolean;
};

const EditForm = ({
  formHeader,
  formPlaceholder,
  formErrorMessage,
  formIcon,
  formIconColor = 'blue',
  value = '',
  onChange,
  onKeyDown,
  invalidValue = false,
}: EditFormProps) => {
  const error = invalidValue ? formErrorMessage : null;
  return (
    <Message className="social-blocks-message">
      <center>
        <Icon
          name={formIcon}
          className="blockIcon"
          size={'50px'}
          color={formIconColor}
        />
        <Header>{formHeader}</Header>
      </center>
      <div className="input-wrapper">
        <Input
          error={error}
          onKeyDown={onKeyDown}
          onChange={onChange}
          placeholder={formPlaceholder}
          value={value}
        />
      </div>
    </Message>
  );
};

export default EditForm;
