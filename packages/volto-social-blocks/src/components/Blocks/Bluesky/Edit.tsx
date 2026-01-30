import React, { useEffect, useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import iconSVG from '../../../icons/bluesky.svg';
import { isValidBlueskyUrl } from '../../../helpers';
import EditForm from '../../EditForm/EditForm';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import SidebarPortal from '@plone/volto/components/manage/Sidebar/SidebarPortal';
import type { BlockEditPropsWithData } from '../../../types/blocks';
import NonInteractiveWrapper from '../../NonInteractiveWrapper/NonInteractiveWrapper';

import BlueskyBlockData from './Data';
import BlueskyBlockView from './View';
import type { BlueskyBlockFormData as BlueskyBlockDataType } from './Data';

const SidebarPortalAny = SidebarPortal as React.ComponentType<any>;

const messages = defineMessages({
  editFormHeader: {
    id: 'Embed Bluesky content',
    defaultMessage: 'Embed Bluesky content',
  },
  editFormPlaceholder: {
    id: 'Provide a Bluesky url',
    defaultMessage: 'Provide a Bluesky url',
  },
  errorMessage: {
    id: 'Please provide a valid Bluesky url',
    defaultMessage: 'Please provide a valid Bluesky url',
  },
});

type Props = BlockEditPropsWithData<BlueskyBlockDataType>;

const BlueskyBlockEdit = (props: Props) => {
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
  const [blueskyUrl, setBlueskyUrl] = useState<string | undefined>(
    data.blueskyUrl,
  );
  const [hasError, setHasError] = useState(false);
  const intl = useIntl();

  useEffect(() => {
    if (data.blueskyUrl !== blueskyUrl && isValidBlueskyUrl(data.blueskyUrl)) {
      setBlueskyUrl(data.blueskyUrl);
    }
  }, [data, blueskyUrl]);

  const updateBlueskyUrl = (value: string) => {
    if (isValidBlueskyUrl(value)) {
      setHasError(false);
      setBlueskyUrl(value);
      onChangeBlock(block, { ...data, blueskyUrl: value });
    } else {
      setHasError(true);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      updateBlueskyUrl((e.target as HTMLInputElement).value);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    updateBlueskyUrl(e.target.value);
  };

  return blueskyUrl ? (
    <>
      <NonInteractiveWrapper>
        <BlueskyBlockView data={data} className={className} />
      </NonInteractiveWrapper>
      <SidebarPortalAny selected={selected}>
        <BlueskyBlockData
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
      value={blueskyUrl}
      invalidValue={hasError}
    />
  );
};

export default withBlockExtensions(BlueskyBlockEdit);
