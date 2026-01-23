import React, { useEffect, useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import iconSVG from '../../../icons/tiktok.svg';
import { isValidTikTokUrl } from '../../../helpers';
import EditForm from '../../EditForm/EditForm';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import SidebarPortal from '@plone/volto/components/manage/Sidebar/SidebarPortal';
import TikTokBlockData from './Data';
import TikTokBlockView from './View';
import type { TikTokBlockFormData as TikTokBlockDataType } from './Data';
import type { BlockEditPropsWithData } from '../../../types/blocks';

const SidebarPortalAny = SidebarPortal as React.ComponentType<any>;

const messages = defineMessages({
  editFormHeader: {
    id: 'Embed a TikTok',
    defaultMessage: 'Embed a TikTok',
  },
  editFormPlaceholder: {
    id: 'Provide a TikTok url',
    defaultMessage: 'Provide a TikTok url',
  },
  errorMessage: {
    id: 'Please provide a valid TikTok url',
    defaultMessage: 'Please provide a valid TikTok url',
  },
});

type Props = BlockEditPropsWithData<TikTokBlockDataType>;

const TikTokBlockEdit = (props: Props) => {
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
  const [tiktokUrl, setTikTokUrl] = useState<string | undefined>(
    data.tiktokUrl,
  );
  const [hasError, setHasError] = useState(false);
  const intl = useIntl();

  useEffect(() => {
    if (data.tiktokUrl !== tiktokUrl && isValidTikTokUrl(data.tiktokUrl)) {
      setTikTokUrl(data.tiktokUrl);
    }
  }, [data, tiktokUrl]);

  const updateTikTokUrl = (value: string) => {
    if (isValidTikTokUrl(value)) {
      setHasError(false);
      setTikTokUrl(value);
      onChangeBlock(block, { ...data, tiktokUrl: value });
    } else {
      setHasError(true);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      updateTikTokUrl((e.target as HTMLInputElement).value);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    updateTikTokUrl(e.target.value);
  };

  return tiktokUrl ? (
    <>
      <TikTokBlockView data={data} className={className} />
      <SidebarPortalAny selected={selected}>
        <TikTokBlockData
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
      onChange={onChange}
      onKeyDown={onKeyDown}
      value={tiktokUrl}
      invalidValue={hasError}
    />
  );
};

export default withBlockExtensions(TikTokBlockEdit);
