import React, { useEffect, useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import iconSVG from '../../../icons/soundcloud.svg';
import { extractSoundCloudId, isValidSoundcloudId } from '../../../helpers';
import EditForm from '../../EditForm/EditForm';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import SidebarPortal from '@plone/volto/components/manage/Sidebar/SidebarPortal';
import type { BlockEditPropsWithData } from '../../../types/blocks';

import SoundcloudBlockData from './Data';
import SoundcloudBlockView from './View';
import type { SoundcloudBlockFormData as SoundcloudBlockDataType } from './Data';

const SidebarPortalAny = SidebarPortal as React.ComponentType<any>;

const messages = defineMessages({
  editFormHeader: {
    id: 'Embed a SoundCloud Track',
    defaultMessage: 'Embed a SoundCloud Track',
  },
  editFormPlaceholder: {
    id: 'Provide the SoundCloud embed code',
    defaultMessage: 'Provide the SoundCloud embed code',
  },
  errorMessage: {
    id: 'Please provide a valid SoundCloud embed code',
    defaultMessage: 'Please provide a valid SoundCloud embed code',
  },
});

type Props = BlockEditPropsWithData<SoundcloudBlockDataType>;

const SoundcloudBlockEdit = (props: Props) => {
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
  const [soundcloudId, setSoundcloudId] = useState<string | undefined>(
    data.soundcloudId,
  );
  const [hasError, setHasError] = useState(false);
  const intl = useIntl();

  useEffect(() => {
    if (data.soundcloudId !== soundcloudId) {
      const newValue = extractSoundCloudId(data.soundcloudId);
      setSoundcloudId(newValue);
    }
  }, [data, soundcloudId]);

  const updateSoundcloudId = (value: string) => {
    const newValue = extractSoundCloudId(value);
    if (newValue && isValidSoundcloudId(newValue)) {
      setHasError(false);
      setSoundcloudId(newValue);
      onChangeBlock(block, { ...data, soundcloudId: newValue });
    } else {
      setHasError(true);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      updateSoundcloudId((e.target as HTMLInputElement).value);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    updateSoundcloudId(e.target.value);
  };

  return soundcloudId ? (
    <>
      <SoundcloudBlockView data={data} className={className} />
      <SidebarPortalAny selected={selected}>
        <SoundcloudBlockData
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
      value={soundcloudId}
      invalidValue={hasError}
    />
  );
};

export default withBlockExtensions(SoundcloudBlockEdit);
