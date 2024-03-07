import React from 'react';
import { BlockDataForm } from '@plone/volto/components';
import { isValidSpotifyId } from '../../../helpers';
import { spotifySchema } from './schema';
import { useIntl } from 'react-intl';

const SpotifyBlockData = (props) => {
  const { data, block, onChangeBlock } = props;
  const intl = useIntl();
  const schema = spotifySchema({ ...props, intl });
  Object.keys(schema.properties).forEach((key) => {
    const field = schema.properties[key];
    const defaultValue = field.default;
    if (defaultValue !== undefined && data[field] === undefined) {
      data[field] = defaultValue;
    }
  });
  const onChangeField = (id, value) => {
    if (id === 'spotifyId' && value !== '') {
      if (!isValidSpotifyId(value)) {
        return;
      }
    }
    onChangeBlock(block, {
      ...data,
      [id]: value,
    });
  };

  return <BlockDataForm schema={schema} title={schema.title} onChangeField={onChangeField} onChangeBlock={onChangeBlock} formData={data} block={block} />;
};

export default SpotifyBlockData;
