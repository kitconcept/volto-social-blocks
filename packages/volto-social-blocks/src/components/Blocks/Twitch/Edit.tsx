import React, { useEffect, useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import iconSVG from '../../../icons/twitch.svg';
import { isValidTwitchUrl } from '../../../helpers';
import EditForm from '../../EditForm/EditForm';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import SidebarPortal from '@plone/volto/components/manage/Sidebar/SidebarPortal';
import type { BlockEditPropsWithData } from '../../../types/blocks';
import NonInteractiveWrapper from '../../NonInteractiveWrapper/NonInteractiveWrapper';

import TwitchBlockData from './Data';
import TwitchBlockView from './View';
import type { TwitchBlockFormData as TwitchBlockDataType } from './Data';

const SidebarPortalAny = SidebarPortal as React.ComponentType<any>;

const messages = defineMessages({
  editFormHeader: {
    id: 'Embed Twitch content',
    defaultMessage: 'Embed Twitch content',
  },
  editFormPlaceholder: {
    id: 'Provide a Twitch channel, video, or clip url',
    defaultMessage: 'Provide a Twitch channel, video, or clip url',
  },
  errorMessage: {
    id: 'Please provide a valid Twitch url',
    defaultMessage: 'Please provide a valid Twitch url',
  },
});

type Props = BlockEditPropsWithData<TwitchBlockDataType>;

const TwitchBlockEdit = (props: Props) => {
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
  const [twitchUrl, setTwitchUrl] = useState<string | undefined>(
    data.twitchUrl,
  );
  const [hasError, setHasError] = useState(false);
  const intl = useIntl();

  useEffect(() => {
    if (data.twitchUrl !== twitchUrl && isValidTwitchUrl(data.twitchUrl)) {
      setTwitchUrl(data.twitchUrl);
    }
  }, [data, twitchUrl]);

  const updateTwitchUrl = (value: string) => {
    if (isValidTwitchUrl(value)) {
      setHasError(false);
      setTwitchUrl(value);
      onChangeBlock(block, { ...data, twitchUrl: value });
    } else {
      setHasError(true);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      updateTwitchUrl((e.target as HTMLInputElement).value);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    updateTwitchUrl(e.target.value);
  };

  return twitchUrl ? (
    <>
      <NonInteractiveWrapper>
        <TwitchBlockView data={data} className={className} />
      </NonInteractiveWrapper>
      <SidebarPortalAny selected={selected}>
        <TwitchBlockData
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

export default withBlockExtensions(TwitchBlockEdit);
