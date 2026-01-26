import React, { useEffect, useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import iconSVG from '../../../icons/pinterest.svg';
import { isValidPinterestUrl } from '../../../helpers';
import EditForm from '../../EditForm/EditForm';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import SidebarPortal from '@plone/volto/components/manage/Sidebar/SidebarPortal';
import PinterestBlockData from './Data';
import PinterestBlockView from './View';
import type { PinterestBlockFormData as PinterestBlockDataType } from './Data';
import type { BlockEditPropsWithData } from '../../../types/blocks';

const SidebarPortalAny = SidebarPortal as React.ComponentType<any>;

const messages = defineMessages({
  editFormHeader: {
    id: 'Embed a Pinterest Pin',
    defaultMessage: 'Embed a Pinterest Pin',
  },
  editFormPlaceholder: {
    id: 'Provide a Pinterest pin url',
    defaultMessage: 'Provide a Pinterest pin url',
  },
  errorMessage: {
    id: 'Please provide a valid Pinterest url',
    defaultMessage: 'Please provide a valid Pinterest url',
  },
});

type Props = BlockEditPropsWithData<PinterestBlockDataType>;

const PinterestBlockEdit = (props: Props) => {
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
  const [pinterestUrl, setPinterestUrl] = useState<string | undefined>(
    data.pinterestUrl,
  );
  const [hasError, setHasError] = useState(false);
  const intl = useIntl();

  useEffect(() => {
    if (
      data.pinterestUrl !== pinterestUrl &&
      isValidPinterestUrl(data.pinterestUrl)
    ) {
      setPinterestUrl(data.pinterestUrl);
    }
  }, [data, pinterestUrl]);

  const updatePinterestUrl = (value: string) => {
    if (isValidPinterestUrl(value)) {
      setHasError(false);
      setPinterestUrl(value);
      onChangeBlock(block, { ...data, pinterestUrl: value });
    } else {
      setHasError(true);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      updatePinterestUrl((e.target as HTMLInputElement).value);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    updatePinterestUrl(e.target.value);
  };

  return pinterestUrl ? (
    <>
      <PinterestBlockView data={data} className={className} />
      <SidebarPortalAny selected={selected}>
        <PinterestBlockData
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
      value={pinterestUrl}
      invalidValue={hasError}
    />
  );
};

export default withBlockExtensions(PinterestBlockEdit);
