import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import iconSVG from '@kitconcept/volto-social-blocks/icons/linkedin.svg';
import messages from '@kitconcept/volto-social-blocks/messages';
import { extractLinkedInPostURL } from '@kitconcept/volto-social-blocks/helpers';
import EditForm from '@kitconcept/volto-social-blocks/components/EditForm/EditForm';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import SidebarPortal from '@plone/volto/components/manage/Sidebar/Sidebar';

import LinkedInBlockData from './Data';
import LinkedInBlockView from './View';

const LinkedInBlockEdit = (props) => {
  const { data, onChangeBlock, block, selected } = props;
  const [postURL, setPostURL] = useState(data.postURL);
  const [hasError, setHasError] = useState(false);
  const intl = useIntl();

  const updatePostURL = (value) => {
    const url = extractLinkedInPostURL(value);
    if (url && url != postURL) {
      setHasError(false);
      setPostURL(url);
      onChangeBlock(block, { ...data, postURL: url });
    } else {
      setHasError(true);
    }
  };
  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      updatePostURL(e.target.value);
    }
  };

  const onChange = (e) => {
    e.preventDefault();
    e.stopPropagation();
    updatePostURL(e.target.value);
  };

  return (
    <>
      {postURL ? (
        <LinkedInBlockView {...props} isEditMode />
      ) : (
        <EditForm
          formHeader={intl.formatMessage(messages.linkedInFormHeader)}
          formPlaceholder={intl.formatMessage(messages.linkedInFormPlaceholder)}
          formErrorMessage={intl.formatMessage(messages.linkedInErrorMessage)}
          formIcon={iconSVG}
          onKeyDown={onKeyDown}
          onChange={onChange}
          value={postURL}
          invalidValue={hasError}
        />
      )}
      <SidebarPortal selected={selected}>
        <LinkedInBlockData
          data={data}
          block={block}
          onChangeBlock={onChangeBlock}
        />
      </SidebarPortal>
    </>
  );
};

export default withBlockExtensions(LinkedInBlockEdit);
