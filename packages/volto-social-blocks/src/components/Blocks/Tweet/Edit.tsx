import React, { useEffect, useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { extractTweetId } from '../../../helpers';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import SidebarPortal from '@plone/volto/components/manage/Sidebar/SidebarPortal';
import EditForm from '../../EditForm/EditForm';
import iconSVG from '../../../icons/twitter.svg';
import TweetBlockData from './Data';
import TweetBlockView from './View';

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

type Props = {
  data: any;
  onChangeBlock: (block: string, data: any) => void;
  block: string;
  selected?: boolean;
};

const TweetBlockEdit = (props: Props) => {
  const { data, onChangeBlock, block, selected } = props;
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

  const onChange = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    updateTweetId(e.target.value);
  };

  return tweetId ? (
    <>
      <TweetBlockView {...(props as any)} isEditMode />
      <SidebarPortal selected={selected}>
        <TweetBlockData
          data={data}
          block={block}
          onChangeBlock={onChangeBlock}
        />
      </SidebarPortal>
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

export default withBlockExtensions(TweetBlockEdit as any);
