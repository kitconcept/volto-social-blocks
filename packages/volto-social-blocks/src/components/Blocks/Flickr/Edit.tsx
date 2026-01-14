import React, { useEffect, useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import iconSVG from '../../../icons/flickr.svg';
import { isValidFlickrId } from '../../../helpers';
import EditForm from '../../EditForm/EditForm';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import SidebarPortal from '@plone/volto/components/manage/Sidebar/SidebarPortal';

import FlickrBlockData from './Data';
import FlickrBlockView from './View';

const messages = defineMessages({
  editFormHeader: {
    id: 'Embed a Flickr Gallery',
    defaultMessage: 'Embed a Flickr Gallery',
  },
  editFormPlaceholder: {
    id: 'Provide the embed code of the Flickr Gallery',
    defaultMessage: 'Provide the embed code of the Flickr Gallery',
  },
  errorMessage: {
    id: 'Please provide a valid Flickr Gallery embed code',
    defaultMessage: 'Please provide a valid Flickr Gallery embed code',
  },
});

type Props = {
  data: any;
  onChangeBlock: (block: string, data: any) => void;
  block: string;
  selected?: boolean;
};

const FlickrBlockEdit = (props: Props) => {
  const { data, onChangeBlock, block, selected } = props;
  const [flickrId, setFlickrId] = useState<string | undefined>(data.flickrId);
  const [hasError, setHasError] = useState(false);
  const intl = useIntl();

  useEffect(() => {
    if (data.flickrId !== flickrId && isValidFlickrId(data.flickrId)) {
      setFlickrId(data.flickrId);
    }
  }, [data, flickrId]);

  const updateFlickrId = (value: string) => {
    if (isValidFlickrId(value)) {
      setHasError(false);
      setFlickrId(value);
      onChangeBlock(block, { ...data, flickrId: value });
    } else {
      setHasError(true);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      updateFlickrId((e.target as HTMLInputElement).value);
    }
  };

  const onChange = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    updateFlickrId(e.target.value);
  };

  return flickrId ? (
    <>
      <FlickrBlockView {...(props as any)} isEditMode />
      <SidebarPortal selected={selected}>
        <FlickrBlockData
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
      value={flickrId}
      invalidValue={hasError}
    />
  );
};

export default withBlockExtensions(FlickrBlockEdit as any);
