import React, { useEffect, useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { extractTweetId } from '../../../helpers';
import { withBlockExtensions } from '@plone/volto/helpers';
import { SidebarPortal } from '@plone/volto/components';
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

const TweetBlockEdit = (props) => {
  const { data, onChangeBlock, block, selected } = props;
  const [tweetId, setTweetId] = useState(data.tweetId);
  const [hasError, setHasError] = useState(false);
  const intl = useIntl();

  useEffect(() => {
    if (data.tweetId !== tweetId) {
      const newValue = extractTweetId(data.tweetId);
      setTweetId(newValue);
    }
  }, [data, tweetId]);

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      updateTweetId(e.target.value);
    }
  };

  const onChange = (e) => {
    e.preventDefault();
    e.stopPropagation();
    updateTweetId(e.target.value);
  };

  const updateTweetId = (value) => {
    const newValue = extractTweetId(value);
    if (newValue) {
      setHasError(false);
      setTweetId(newValue);
      onChangeBlock(block, { ...data, tweetId: newValue });
    } else {
      setHasError(true);
    }
  };

  return tweetId ? (
    <>
      <TweetBlockView {...props} isEditMode />
      <SidebarPortal selected={selected}>
        <TweetBlockData data={data} block={block} onChangeBlock={onChangeBlock} />
      </SidebarPortal>
    </>
  ) : (
    <EditForm formHeader={intl.formatMessage(messages.editFormHeader)} formPlaceholder={intl.formatMessage(messages.editFormPlaceholder)} formErrorMessage={intl.formatMessage(messages.errorMessage)} formIcon={iconSVG} onKeyDown={onKeyDown} onChange={onChange} value={tweetId} invalidValue={hasError} />
  );
};

export default withBlockExtensions(TweetBlockEdit);
