import React, { useEffect, useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import iconSVG from '../../../icons/applemusic.svg';
import { isValidAppleMusicUrl } from '../../../helpers';
import EditForm from '../../EditForm/EditForm';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import SidebarPortal from '@plone/volto/components/manage/Sidebar/SidebarPortal';
import type { BlockEditPropsWithData } from '../../../types/blocks';
import NonInteractiveWrapper from '../../NonInteractiveWrapper/NonInteractiveWrapper';

import AppleMusicBlockData from './Data';
import AppleMusicBlockView from './View';
import type { AppleMusicBlockFormData as AppleMusicBlockDataType } from './Data';

const SidebarPortalAny = SidebarPortal as React.ComponentType<any>;

const messages = defineMessages({
  editFormHeader: {
    id: 'Embed Apple Music/Podcast content',
    defaultMessage: 'Embed Apple Music/Podcast content',
  },
  editFormPlaceholder: {
    id: 'Provide an Apple Music or Podcast url',
    defaultMessage: 'Provide an Apple Music or Podcast url',
  },
  errorMessage: {
    id: 'Please provide a valid Apple Music or Podcast url',
    defaultMessage: 'Please provide a valid Apple Music or Podcast url',
  },
});

type Props = BlockEditPropsWithData<AppleMusicBlockDataType>;

const AppleMusicBlockEdit = (props: Props) => {
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
  const [appleMusicUrl, setAppleMusicUrl] = useState<string | undefined>(
    data.appleMusicUrl,
  );
  const [hasError, setHasError] = useState(false);
  const intl = useIntl();

  useEffect(() => {
    if (
      data.appleMusicUrl !== appleMusicUrl &&
      isValidAppleMusicUrl(data.appleMusicUrl)
    ) {
      setAppleMusicUrl(data.appleMusicUrl);
    }
  }, [data, appleMusicUrl]);

  const updateAppleMusicUrl = (value: string) => {
    if (isValidAppleMusicUrl(value)) {
      setHasError(false);
      setAppleMusicUrl(value);
      onChangeBlock(block, { ...data, appleMusicUrl: value });
    } else {
      setHasError(true);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      updateAppleMusicUrl((e.target as HTMLInputElement).value);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    updateAppleMusicUrl(e.target.value);
  };

  return appleMusicUrl ? (
    <>
      <NonInteractiveWrapper>
        <AppleMusicBlockView data={data} className={className} />
      </NonInteractiveWrapper>
      <SidebarPortalAny selected={selected}>
        <AppleMusicBlockData
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
      invalidValue={hasError}
    />
  );
};

export default withBlockExtensions(AppleMusicBlockEdit);
