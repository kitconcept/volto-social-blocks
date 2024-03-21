import React, { useEffect, useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import iconSVG from '../../../icons/facebook.svg';
import { isValidFacebookId } from '../../../helpers';
import EditForm from '../../EditForm/EditForm';
import { withBlockExtensions } from '@plone/volto/helpers';
import { SidebarPortal } from '@plone/volto/components';

import FacebookBlockData from './Data';
import FacebookBlockView from './View';

const messages = defineMessages({
  editFormHeader: {
    id: 'Embed a Facebook Post',
    defaultMessage: 'Embed a Facebook Post',
  },
  editFormPlaceholder: {
    id: 'Provide a url to the Facebook Post',
    defaultMessage: 'Provide a url to the Facebook Post',
  },
  errorMessage: {
    id: 'Please provide a valid Facebook Post url',
    defaultMessage: 'Please provide a valid Facebook Post url',
  },
});

const FacebookBlockEdit = (props) => {
  const { data, onChangeBlock, block, selected } = props;
  const [facebookId, setFacebookId] = useState(data.facebookId);
  const [hasError, setHasError] = useState(false);
  const intl = useIntl();

  useEffect(() => {
    if (data.facebookId !== facebookId && isValidFacebookId(data.facebookId)) {
      setFacebookId(data.facebookId);
    }
  }, [data, facebookId]);

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      updateFacebookId(e.target.value);
    }
  };

  const onChange = (e) => {
    e.preventDefault();
    e.stopPropagation();
    updateFacebookId(e.target.value);
  };

  const updateFacebookId = (value) => {
    if (isValidFacebookId(value)) {
      setHasError(false);
      setFacebookId(value);
      onChangeBlock(block, { ...data, facebookId: value });
    } else {
      setHasError(true);
    }
  };

  return facebookId ? (
    <>
      <FacebookBlockView {...props} isEditMode />
      <SidebarPortal selected={selected}>
        <FacebookBlockData data={data} block={block} onChangeBlock={onChangeBlock} />
      </SidebarPortal>
    </>
  ) : (
    <EditForm formHeader={intl.formatMessage(messages.editFormHeader)} formPlaceholder={intl.formatMessage(messages.editFormPlaceholder)} formErrorMessage={intl.formatMessage(messages.errorMessage)} formIcon={iconSVG} onKeyDown={onKeyDown} onChange={onChange} value={facebookId} invalidValue={hasError} />
  );
};

export default withBlockExtensions(FacebookBlockEdit);
