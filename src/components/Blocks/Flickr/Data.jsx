import React from 'react';
import { BlockDataForm } from '@plone/volto/components';
import { isValidFlickrId } from '../../../helpers';
import { flickrSchema } from './schema';
import { useIntl } from 'react-intl';

const FlickrBlockData = (props) => {
  const { data, block, onChangeBlock } = props;
  const intl = useIntl();
  const schema = flickrSchema({ ...props, intl });

  const onChangeField = (id, value) => {
    if (id === 'flickrId' && value !== '') {
      if (!isValidFlickrId(value)) {
        return;
      }
    }
    onChangeBlock(block, {
      ...data,
      [id]: value,
    });
  };

  return (
    <BlockDataForm
      schema={schema}
      title={schema.title}
      onChangeField={onChangeField}
      formData={data}
      block={block}
    />
  );
};

export default FlickrBlockData;
