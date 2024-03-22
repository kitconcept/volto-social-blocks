import React, { useEffect, useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import iconSVG from '../../../icons/soundcloud.svg';
import { isValidSoundcloudId, extractSoundCloudId } from '../../../helpers';
import EditForm from '../../EditForm/EditForm';
import { withBlockExtensions } from '@plone/volto/helpers';
import { SidebarPortal } from '@plone/volto/components';

import SoundcloudBlockData from './Data';
import SoundcloudBlockView from './View';

const messages = defineMessages({
  editFormHeader: {
    id: 'Embed a Soundcloud Content',
    defaultMessage: 'Embed a Soundcloud Content',
  },
  editFormPlaceholder: {
    id: 'Provide the embed code of the Soundcloud Content',
    defaultMessage: 'Provide the embed code of the Soundcloud Content',
  },
  errorMessage: {
    id: 'Please provide a valid Content Post url',
    defaultMessage: 'Please provide a valid Soundcloud Content url',
  },
});

const SoundcloudBlockEdit = (props) => {
  const { data, onChangeBlock, block, selected } = props;
  const [soundcloudId, setSoundcloudId] = useState(data.soundcloudId);
  const [hasError, setHasError] = useState(false);
  const intl = useIntl();

  useEffect(() => {
    if (data.soundcloudId !== soundcloudId) {
      const newValue = extractSoundCloudId(data.soundcloudId);
      if (isValidSoundcloudId(newValue)) {
        setSoundcloudId(newValue);
      }
    }
  }, [data, soundcloudId]);

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      updateSoundcloudId(e.target.value);
    }
  };

  const onChange = (e) => {
    e.preventDefault();
    e.stopPropagation();
    updateSoundcloudId(e.target.value);
  };

  const updateSoundcloudId = (value) => {
    const newValue = extractSoundCloudId(value);
    if (newValue && isValidSoundcloudId(newValue)) {
      setHasError(false);
      setSoundcloudId(newValue);
      onChangeBlock(block, { ...data, soundcloudId: newValue });
    } else {
      setHasError(true);
    }
  };

  return soundcloudId ? (
    <>
      <SoundcloudBlockView {...props} isEditMode />
      <SidebarPortal selected={selected}>
        <SoundcloudBlockData
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
      value={soundcloudId}
      invalidValue={hasError}
    />
  );
};

export default withBlockExtensions(SoundcloudBlockEdit);
