import React from 'react';
import Icon from '@plone/volto/components/theme/Icon/Icon';
import './EditForm.css';

export type EditFormProps = {
  formHeader?: string;
  formPlaceholder?: string;
  formErrorMessage?: string;
  formIcon?: string;
  formIconColor?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
  return (
    <div className="social-blocks-message" role="group" aria-label={formHeader}>
      <div className="social-blocks-message__header">
        <Icon
          name={formIcon}
          className="blockIcon"
          size={'50px'}
          color={formIconColor}
        />
        {formHeader ? (
          <h3 className="social-blocks-message__title">{formHeader}</h3>
        ) : null}
      </div>
      <div className="input-wrapper">
        <input
          className="social-blocks-input"
          onKeyDown={onKeyDown}
          onChange={onChange}
          placeholder={formPlaceholder}
          value={value}
          aria-invalid={invalidValue || undefined}
        />
      </div>
      {invalidValue && formErrorMessage ? (
        <div className="social-blocks-error" role="alert">
          {formErrorMessage}
        </div>
      ) : null}
    </div>
  );
};

export default EditForm;
