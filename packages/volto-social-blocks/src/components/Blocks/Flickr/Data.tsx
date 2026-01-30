import React from 'react';
import { BlockDataForm } from '@plone/volto/components/manage/Form';
import { applySchemaDefaults, isValidFlickrId } from '../../../helpers';
import { flickrSchema } from './schema';
import { useIntl } from 'react-intl';
import type { FlickrViewProps } from './DefaultView';
import type { BlockSchemaProps, BlocksFormData } from '@plone/types';
import type { BlockDataFormWrapperProps } from '../../../types/blocks';

export type FlickrBlockFormData = BlocksFormData &
  Pick<FlickrViewProps, 'flickrId' | 'align' | 'size'>;

type FlickrBlockDataProps = BlockDataFormWrapperProps<FlickrBlockFormData>;

const FlickrBlockData = (props: FlickrBlockDataProps) => {
  const { data, block, onChangeBlock, blocksConfig, navRoot, contentType } =
    props;
  const intl = useIntl();
  const schema = flickrSchema({ intl } satisfies BlockSchemaProps);

  const formData = applySchemaDefaults(schema, data);

  const onChangeField = (id: string, value: unknown) => {
    if (id === 'flickrId' && typeof value === 'string' && value !== '') {
      if (!isValidFlickrId(value)) {
        return;
      }
    }
    onChangeBlock(block, {
      ...formData,
      [id]: value,
    });
  };

  return (
    <BlockDataForm
      schema={schema}
      title={schema.title}
      onChangeField={onChangeField}
      onChangeBlock={onChangeBlock}
      formData={formData}
      block={block}
      blocksConfig={blocksConfig}
      navRoot={navRoot}
      contentType={contentType}
    />
  );
};

export default FlickrBlockData;
