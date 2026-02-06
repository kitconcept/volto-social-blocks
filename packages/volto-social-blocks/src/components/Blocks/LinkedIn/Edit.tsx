import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import iconSVG from '@kitconcept/volto-social-blocks/icons/linkedin.svg';
import messages from '@kitconcept/volto-social-blocks/messages';
import { extractLinkedInPostURL } from '@kitconcept/volto-social-blocks/helpers';
import EditForm from '@kitconcept/volto-social-blocks/components/EditForm/EditForm';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import SidebarPortal from '@plone/volto/components/manage/Sidebar/SidebarPortal';
import type { BlockEditPropsWithData } from '../../../types/blocks';
import NonInteractiveWrapper from '../../NonInteractiveWrapper/NonInteractiveWrapper';

import LinkedInBlockData from './Data';
import LinkedInBlockView from './View';
import type { LinkedInBlockFormData as LinkedInBlockDataType } from './Data';

const SidebarPortalAny = SidebarPortal as React.ComponentType<any>;

type Props = BlockEditPropsWithData<LinkedInBlockDataType>;

const LinkedInBlockEdit = (props: Props) => {
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
  const [postURL, setPostURL] = useState<string | undefined>(data.postURL);
  const [hasError, setHasError] = useState(false);
  const intl = useIntl();

  const updatePostURL = (value: string) => {
    const url = extractLinkedInPostURL(value);
    if (url && url !== postURL) {
      setHasError(false);
      setPostURL(url);
      onChangeBlock(block, { ...data, postURL: url });
    } else {
      setHasError(true);
    }
  };
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      updatePostURL((e.target as HTMLInputElement).value);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    updatePostURL(e.target.value);
  };

  return (
    <>
      {postURL ? (
        <NonInteractiveWrapper>
          <LinkedInBlockView data={data} className={className} />
        </NonInteractiveWrapper>
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
      <SidebarPortalAny selected={selected}>
        <LinkedInBlockData
          data={data}
          block={block}
          onChangeBlock={onChangeBlock}
          blocksConfig={blocksConfig}
          navRoot={navRoot}
          contentType={contentType}
        />
      </SidebarPortalAny>
    </>
  );
};

export default withBlockExtensions(LinkedInBlockEdit);
