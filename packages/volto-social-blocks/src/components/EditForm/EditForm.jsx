import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@plone/volto/components/theme/Icon/Icon';
import { Input, Header, Message } from 'semantic-ui-react';
import './EditForm.css';

const EditForm = ({
  formHeader,
  formPlaceholder,
  formErrorMessage,
  formIcon,
  formIconColor,
  value,
  onChange,
  onKeyDown,
  invalidValue,
}) => {
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

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
EditForm.propTypes = {
  formHeader: PropTypes.string,
  formPlaceholder: PropTypes.string,
  formErrorMessage: PropTypes.string,
  onKeyDown: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
  invalidValue: PropTypes.bool,
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
EditForm.defaultProps = {
  formIconColor: 'blue',
  value: '',
  invalidValue: false,
};

export default EditForm;
