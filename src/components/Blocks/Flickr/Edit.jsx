import React, { useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import iconSVG from '../../../icons/flickr.svg';
import { isValidFlickrId } from '../../../helpers';
import { EditForm } from '../../../components';
import { withBlockExtensions } from '@plone/volto/helpers';
import { SidebarPortal } from '@plone/volto/components';

import FlickrBlockData from './Data';
import FlickrBlockView from './View';

const messages = defineMessages({
  editFormHeader: {
    id: 'Embed a Flickr Gallery',
    defaultMessage: 'Embed a Flickr Gallery',
  },
  editFormPlaceholder: {
    id: 'Provide the embed code of the Flickr Gallery',
    defaultMessage: 'Provide the embed code of the Flickr Gallery',
  },
  errorMessage: {
    id: 'Please provide a valid Flickr Gallery embed code',
    defaultMessage: 'Please provide a valid Flickr Gallery embed code',
  },
});

const FlickrBlockEdit = (props) => {
  const { data, onChangeBlock, block, selected } = props;
  const [flickrId, setFlickrId] = useState(data.flickrId);
  const [hasError, setHasError] = useState(false);
  const intl = useIntl();

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      updateFlickrId(e.target.value);
    }
  };

  const onChange = (e) => {
    e.preventDefault();
    e.stopPropagation();
    updateFlickrId(e.target.value);
  };

  const updateFlickrId = (value) => {
    if (isValidFlickrId(value)) {
      setHasError(false);
      setFlickrId(value);
      onChangeBlock(block, { ...data, flickrId: value });
    } else {
      setHasError(true);
    }
  };

  return flickrId ? (
    <>
      <FlickrBlockView {...props} isEditMode />
      <SidebarPortal selected={selected}>
        <FlickrBlockData
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
      value={flickrId}
      invalidValue={hasError}
    />
  );
};

export default withBlockExtensions(FlickrBlockEdit);
