import React, { useEffect, useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import iconSVG from '../../../icons/spotify.svg';
import { isValidSpotifyId } from '../../../helpers';
import { EditForm } from '../../../components';
import { withBlockExtensions } from '@plone/volto/helpers';
import { SidebarPortal } from '@plone/volto/components';

import SpotifyBlockData from './Data';
import SpotifyBlockView from './View';

const messages = defineMessages({
  editFormHeader: {
    id: 'Embed a Spotify Content',
    defaultMessage: 'Embed a Spotify Content',
  },
  editFormPlaceholder: {
    id: 'Provide a url to the Spotify Content',
    defaultMessage: 'Provide a url to the Spotify Content',
  },
  errorMessage: {
    id: 'Please provide a valid Content Post url',
    defaultMessage: 'Please provide a valid Spotify Content url',
  },
});

const SpotifyBlockEdit = (props) => {
  const { data, onChangeBlock, block, selected } = props;
  const [spotifyId, setSpotifyId] = useState(data.spotifyId);
  const [hasError, setHasError] = useState(false);
  const intl = useIntl();

  useEffect(() => {
    if (data.spotifyId !== spotifyId && isValidSpotifyId(data.spotifyId)) {
      setSpotifyId(data.spotifyId);
    }
  }, [data, spotifyId]);

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      updateSpotifyId(e.target.value);
    }
  };

  const onChange = (e) => {
    e.preventDefault();
    e.stopPropagation();
    updateSpotifyId(e.target.value);
  };

  const updateSpotifyId = (value) => {
    if (isValidSpotifyId(value)) {
      setHasError(false);
      setSpotifyId(value);
      onChangeBlock(block, { ...data, spotifyId: value });
    } else {
      setHasError(true);
    }
  };

  return spotifyId ? (
    <>
      <SpotifyBlockView {...props} isEditMode />
      <SidebarPortal selected={selected}>
        <SpotifyBlockData data={data} block={block} onChangeBlock={onChangeBlock} />
      </SidebarPortal>
    </>
  ) : (
    <EditForm formHeader={intl.formatMessage(messages.editFormHeader)} formPlaceholder={intl.formatMessage(messages.editFormPlaceholder)} formErrorMessage={intl.formatMessage(messages.errorMessage)} formIcon={iconSVG} onKeyDown={onKeyDown} onChange={onChange} value={spotifyId} invalidValue={hasError} />
  );
};

export default withBlockExtensions(SpotifyBlockEdit);
