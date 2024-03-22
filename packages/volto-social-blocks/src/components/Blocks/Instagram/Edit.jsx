import React, { useEffect, useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import iconSVG from '../../../icons/instagram.svg';
import { isValidInstagramId } from '../../../helpers';
import EditForm from '../../EditForm/EditForm';
import { withBlockExtensions } from '@plone/volto/helpers';
import { SidebarPortal } from '@plone/volto/components';

import InstagramBlockData from './Data';
import InstagramBlockView from './View';

const messages = defineMessages({
  editFormHeader: {
    id: 'Embed a Instagram Post',
    defaultMessage: 'Embed a Instagram Post',
  },
  editFormPlaceholder: {
    id: 'Provide a url to the Instagram Post',
    defaultMessage: 'Provide a url to the Instagram Post',
  },
  errorMessage: {
    id: 'Please provide a valid Instagram Post url',
    defaultMessage: 'Please provide a valid Instagram Post url',
  },
});

const InstagramBlockEdit = (props) => {
  const { data, onChangeBlock, block, selected } = props;
  const [instagramId, setInstagramId] = useState(data.instagramId);
  const [hasError, setHasError] = useState(false);
  const intl = useIntl();

  useEffect(() => {
    if (
      data.instagramId !== instagramId &&
      isValidInstagramId(data.instagramId)
    ) {
      setInstagramId(data.instagramId);
    }
  }, [data, instagramId]);

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      updateInstagramId(e.target.value);
    }
  };

  const onChange = (e) => {
    e.preventDefault();
    e.stopPropagation();
    updateInstagramId(e.target.value);
  };

  const updateInstagramId = (value) => {
    if (isValidInstagramId(value)) {
      setHasError(false);
      setInstagramId(value);
      onChangeBlock(block, { ...data, instagramId: value });
    } else {
      setHasError(true);
    }
  };

  return instagramId ? (
    <>
      <InstagramBlockView {...props} isEditMode />
      <SidebarPortal selected={selected}>
        <InstagramBlockData
          data={data}
          block={block}
          onChangeBlock={onChangeBlock}
        />
      </SidebarPortal>
    </>
  ) : (
    <EditForm
      formHeader={intl.formatMessage(messages.editFormHeader)}
      formPlaceholder={intl.formatMessage(messages.editFormPlaceholder)}
      formErrorMessage={intl.formatMessage(messages.errorMessage)}
      formIcon={iconSVG}
      onKeyDown={onKeyDown}
      onChange={onChange}
      value={instagramId}
      invalidValue={hasError}
    />
  );
};

export default withBlockExtensions(InstagramBlockEdit);
