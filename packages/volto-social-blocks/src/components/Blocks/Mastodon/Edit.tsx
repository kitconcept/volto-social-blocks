import React, { useEffect, useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import iconSVG from '../../../icons/mastodon.svg';
import { isValidMastodonUrl } from '../../../helpers';
import EditForm from '../../EditForm/EditForm';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import SidebarPortal from '@plone/volto/components/manage/Sidebar/SidebarPortal';
import type { BlockEditPropsWithData } from '../../../types/blocks';
import NonInteractiveWrapper from '../../NonInteractiveWrapper/NonInteractiveWrapper';

import MastodonBlockData from './Data';
import MastodonBlockView from './View';
import type { MastodonBlockFormData as MastodonBlockDataType } from './Data';

const SidebarPortalAny = SidebarPortal as React.ComponentType<any>;

const messages = defineMessages({
  editFormHeader: {
    id: 'Embed a Mastodon Post',
    defaultMessage: 'Embed a Mastodon Post',
  },
  editFormPlaceholder: {
    id: 'Provide a url to the Mastodon Post',
    defaultMessage: 'Provide a url to the Mastodon Post',
  },
  errorMessage: {
    id: 'Please provide a valid Mastodon Post url',
    defaultMessage: 'Please provide a valid Mastodon Post url',
  },
});

type Props = BlockEditPropsWithData<MastodonBlockDataType>;

const MastodonBlockEdit = (props: Props) => {
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
  const [mastodonUrl, setMastodonUrl] = useState<string | undefined>(
    data.mastodonUrl,
  );
  const [hasError, setHasError] = useState(false);
  const intl = useIntl();

  useEffect(() => {
    if (
      data.mastodonUrl !== mastodonUrl &&
      isValidMastodonUrl(data.mastodonUrl)
    ) {
      setMastodonUrl(data.mastodonUrl);
    }
  }, [data, mastodonUrl]);

  const updateMastodonUrl = (value: string) => {
    if (isValidMastodonUrl(value)) {
      setHasError(false);
      setMastodonUrl(value);
      onChangeBlock(block, { ...data, mastodonUrl: value });
    } else {
      setHasError(true);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      updateMastodonUrl((e.target as HTMLInputElement).value);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    updateMastodonUrl(e.target.value);
  };

  return mastodonUrl ? (
    <>
      <NonInteractiveWrapper>
        <MastodonBlockView data={data} className={className} />
      </NonInteractiveWrapper>
      <SidebarPortalAny selected={selected}>
        <MastodonBlockData
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

export default withBlockExtensions(MastodonBlockEdit);
