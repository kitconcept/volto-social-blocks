import React, { useEffect, useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import iconSVG from '../../../icons/instagram.svg';
import { isValidInstagramId } from '../../../helpers';
import EditForm from '../../EditForm/EditForm';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import SidebarPortal from '@plone/volto/components/manage/Sidebar/SidebarPortal';
import type { BlockEditPropsWithData } from '../../../types/blocks';
import NonInteractiveWrapper from '../../NonInteractiveWrapper/NonInteractiveWrapper';

import InstagramBlockData from './Data';
import InstagramBlockView from './View';
import type { InstagramBlockFormData as InstagramBlockDataType } from './Data';

const SidebarPortalAny = SidebarPortal as React.ComponentType<any>;

const messages = defineMessages({
  editFormHeader: {
    id: 'Embed an Instagram Post',
    defaultMessage: 'Embed an Instagram Post',
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

type Props = BlockEditPropsWithData<InstagramBlockDataType>;

const InstagramBlockEdit = (props: Props) => {
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
  const [instagramId, setInstagramId] = useState<string | undefined>(
    data.instagramId,
  );
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

  const updateInstagramId = (value: string) => {
    if (isValidInstagramId(value)) {
      setHasError(false);
      setInstagramId(value);
      onChangeBlock(block, { ...data, instagramId: value });
    } else {
      setHasError(true);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      updateInstagramId((e.target as HTMLInputElement).value);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    updateInstagramId(e.target.value);
  };

  return instagramId ? (
    <>
      <NonInteractiveWrapper>
        <InstagramBlockView data={data} className={className} />
      </NonInteractiveWrapper>
      <SidebarPortalAny selected={selected}>
        <InstagramBlockData
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
      value={instagramId}
      invalidValue={hasError}
    />
  );
};

export default withBlockExtensions(InstagramBlockEdit);
