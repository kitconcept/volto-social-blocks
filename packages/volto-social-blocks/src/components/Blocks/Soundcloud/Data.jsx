import React from 'react';
import { BlockDataForm } from '@plone/volto/components/manage/Form';
import { isValidSoundcloudId, extractSoundCloudId } from '../../../helpers';
import { soundcloudSchema } from './schema';
import { useIntl } from 'react-intl';

const SoundcloudBlockData = (props) => {
  const { data, block, onChangeBlock, blocksConfig, navRoot, contentType } =
    props;
  const intl = useIntl();
  const schema = soundcloudSchema({ ...props, intl });
  Object.keys(schema.properties).forEach((key) => {
    const field = schema.properties[key];
    const defaultValue = field.default;
    if (defaultValue !== undefined && data[field] === undefined) {
      data[field] = defaultValue;
    }
  });
  const onChangeField = (id, value) => {
    let newValue = value;
    if (id === 'soundcloudId' && value !== '') {
      newValue = extractSoundCloudId(value);
      if (!isValidSoundcloudId(newValue)) {
        return;
      }
    }
    onChangeBlock(block, {
      ...data,
      [id]: newValue,
    });
  };

  return (
    <BlockDataForm
      schema={schema}
      title={schema.title}
      onChangeField={onChangeField}
      onChangeBlock={onChangeBlock}
      formData={data}
      block={block}
      blocksConfig={blocksConfig}
      navRoot={navRoot}
      contentType={contentType}
    />
  );
};

export default SoundcloudBlockData;
