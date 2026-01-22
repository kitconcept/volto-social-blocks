import React, { useEffect, useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { extractTweetId } from '../../../helpers';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import SidebarPortal from '@plone/volto/components/manage/Sidebar/SidebarPortal';
import EditForm from '../../EditForm/EditForm';
import iconSVG from '../../../icons/twitter.svg';
import TweetBlockData from './Data';
import TweetBlockView from './View';
import type { TweetBlockFormData as TweetBlockDataType } from './Data';
import type { BlockEditPropsWithData } from '../../../types/blocks';

const SidebarPortalAny = SidebarPortal as React.ComponentType<any>;

const messages = defineMessages({
  editFormHeader: {
    id: 'Embed a Tweet',
    defaultMessage: 'Embed a Tweet',
  },
  editFormPlaceholder: {
    id: 'Provide a url to the Tweet or the Tweet ID',
    defaultMessage: 'Provide a url to the Tweet or the Tweet ID',
  },
  errorMessage: {
    id: 'Please provide a valid Tweet ID or Twitter URL',
    defaultMessage: 'Please provide a valid Tweet ID or Twitter URL',
  },
});

type Props = BlockEditPropsWithData<TweetBlockDataType>;

const TweetBlockEdit = (props: Props) => {
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
  const [tweetId, setTweetId] = useState<string | undefined>(data.tweetId);
  const [hasError, setHasError] = useState(false);
  const intl = useIntl();

  useEffect(() => {
    if (data.tweetId !== tweetId) {
      const newValue = extractTweetId(data.tweetId);
      setTweetId(newValue);
    }
  }, [data, tweetId]);

  const updateTweetId = (value: string) => {
    const newValue = extractTweetId(value);
    if (newValue) {
      setHasError(false);
      setTweetId(newValue);
      onChangeBlock(block, { ...data, tweetId: newValue });
    } else {
      setHasError(true);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      updateTweetId((e.target as HTMLInputElement).value);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    updateTweetId(e.target.value);
  };

  return tweetId ? (
    <>
      <TweetBlockView data={data} className={className} />
      <SidebarPortalAny selected={selected}>
        <TweetBlockData
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
      value={tweetId}
      invalidValue={hasError}
    />
  );
};

export default withBlockExtensions(TweetBlockEdit);
