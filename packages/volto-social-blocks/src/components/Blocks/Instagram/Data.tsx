import React from 'react';
import { BlockDataForm } from '@plone/volto/components/manage/Form';
import { isValidInstagramId } from '../../../helpers';
import { instagramSchema } from './schema';
import { useIntl } from 'react-intl';

type Props = any;

const InstagramBlockData = (props: Props) => {
  const { data, block, onChangeBlock, blocksConfig, navRoot, contentType } =
    props;
  const intl = useIntl();
  const schema = instagramSchema({ ...props, intl });

  Object.keys(schema.properties).forEach((key) => {
    const field = schema.properties[key];
    const defaultValue = field.default;
    if (defaultValue !== undefined && data[key] === undefined) {
      data[key] = defaultValue;
    }
  });

  const onChangeField = (id: string, value: any) => {
    if (id === 'instagramId' && value !== '') {
      if (!isValidInstagramId(value)) {
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
      onChangeBlock={onChangeBlock}
      formData={data}
      block={block}
      blocksConfig={blocksConfig}
      navRoot={navRoot}
      contentType={contentType}
    />
  );
};

export default InstagramBlockData;
