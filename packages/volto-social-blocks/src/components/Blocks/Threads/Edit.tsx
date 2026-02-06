import React, { useEffect, useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import iconSVG from '../../../icons/threads.svg';
import { isValidThreadsUrl } from '../../../helpers';
import EditForm from '../../EditForm/EditForm';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import SidebarPortal from '@plone/volto/components/manage/Sidebar/SidebarPortal';
import type { BlockEditPropsWithData } from '../../../types/blocks';
import NonInteractiveWrapper from '../../NonInteractiveWrapper/NonInteractiveWrapper';

import ThreadsBlockData from './Data';
import ThreadsBlockView from './View';
import type { ThreadsBlockFormData as ThreadsBlockDataType } from './Data';

const SidebarPortalAny = SidebarPortal as React.ComponentType<any>;

const messages = defineMessages({
  editFormHeader: {
    id: 'Embed a Threads Post',
    defaultMessage: 'Embed a Threads Post',
  },
  editFormPlaceholder: {
    id: 'Provide a url to the Threads Post',
    defaultMessage: 'Provide a url to the Threads Post',
  },
  errorMessage: {
    id: 'Please provide a valid Threads Post url',
    defaultMessage: 'Please provide a valid Threads Post url',
  },
});

type Props = BlockEditPropsWithData<ThreadsBlockDataType>;

const ThreadsBlockEdit = (props: Props) => {
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
  const [threadsUrl, setThreadsUrl] = useState<string | undefined>(
    data.threadsUrl,
  );
  const [hasError, setHasError] = useState(false);
  const intl = useIntl();

  useEffect(() => {
    if (data.threadsUrl !== threadsUrl && isValidThreadsUrl(data.threadsUrl)) {
      setThreadsUrl(data.threadsUrl);
    }
  }, [data, threadsUrl]);

  const updateThreadsUrl = (value: string) => {
    if (isValidThreadsUrl(value)) {
      setHasError(false);
      setThreadsUrl(value);
      onChangeBlock(block, { ...data, threadsUrl: value });
    } else {
      setHasError(true);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      updateThreadsUrl((e.target as HTMLInputElement).value);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    updateThreadsUrl(e.target.value);
  };

  return threadsUrl ? (
    <>
      <NonInteractiveWrapper>
        <ThreadsBlockView data={data} className={className} />
      </NonInteractiveWrapper>
      <SidebarPortalAny selected={selected}>
        <ThreadsBlockData
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

export default withBlockExtensions(ThreadsBlockEdit);
