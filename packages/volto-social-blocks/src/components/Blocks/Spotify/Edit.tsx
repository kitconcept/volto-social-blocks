import React, { useEffect, useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import iconSVG from '../../../icons/spotify.svg';
import { isValidSpotifyId } from '../../../helpers';
import EditForm from '../../EditForm/EditForm';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import SidebarPortal from '@plone/volto/components/manage/Sidebar/SidebarPortal';
import type { BlockEditPropsWithData } from '../../../types/blocks';
import NonInteractiveWrapper from '../../NonInteractiveWrapper/NonInteractiveWrapper';

import SpotifyBlockData from './Data';
import SpotifyBlockView from './View';
import type { SpotifyBlockFormData as SpotifyBlockDataType } from './Data';

const SidebarPortalAny = SidebarPortal as React.ComponentType<any>;

const messages = defineMessages({
  editFormHeader: {
    id: 'Embed Spotify content',
    defaultMessage: 'Embed Spotify content',
  },
  editFormPlaceholder: {
    id: 'Provide a Spotify url',
    defaultMessage: 'Provide a Spotify url',
  },
  errorMessage: {
    id: 'Please provide a valid Spotify url',
    defaultMessage: 'Please provide a valid Spotify url',
  },
});

type Props = BlockEditPropsWithData<SpotifyBlockDataType>;

const SpotifyBlockEdit = (props: Props) => {
  const {
    data,
    onChangeBlock,
    block,
    selected,
    className,
    blocksConfig,
    navRoot,
    contentType,
  } = props;
  const [spotifyId, setSpotifyId] = useState<string | undefined>(
    data.spotifyId,
  );
  const [hasError, setHasError] = useState(false);
  const intl = useIntl();

  useEffect(() => {
    if (data.spotifyId !== spotifyId && isValidSpotifyId(data.spotifyId)) {
      setSpotifyId(data.spotifyId);
    }
  }, [data, spotifyId]);

  const updateSpotifyId = (value: string) => {
    if (isValidSpotifyId(value)) {
      setHasError(false);
      setSpotifyId(value);
      onChangeBlock(block, { ...data, spotifyId: value });
    } else {
      setHasError(true);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      updateSpotifyId((e.target as HTMLInputElement).value);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    updateSpotifyId(e.target.value);
  };

  return spotifyId ? (
    <>
      <NonInteractiveWrapper>
        <SpotifyBlockView data={data} className={className} />
      </NonInteractiveWrapper>
      <SidebarPortalAny selected={selected}>
        <SpotifyBlockData
          data={data}
          block={block}
          onChangeBlock={onChangeBlock}
          blocksConfig={blocksConfig}
          navRoot={navRoot}
          contentType={contentType}
        />
      </SidebarPortalAny>
    </>
  ) : (
    <EditForm
      formHeader={intl.formatMessage(messages.editFormHeader)}
      formPlaceholder={intl.formatMessage(messages.editFormPlaceholder)}
      formErrorMessage={intl.formatMessage(messages.errorMessage)}
      formIcon={iconSVG}
      onKeyDown={onKeyDown}
      onChange={onChange}
      value={spotifyId}
      invalidValue={hasError}
    />
  );
};

export default withBlockExtensions(SpotifyBlockEdit);
