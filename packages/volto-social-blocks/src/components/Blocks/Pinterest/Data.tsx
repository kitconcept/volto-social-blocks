import React from 'react';
import { BlockDataForm } from '@plone/volto/components/manage/Form';
import { applySchemaDefaults, isValidPinterestUrl } from '../../../helpers';
import { pinterestSchema } from './schema';
import { useIntl } from 'react-intl';
import type { PinterestViewProps } from './DefaultView';
import type { BlockSchemaProps, BlocksFormData } from '@plone/types';
import type { BlockDataFormWrapperProps } from '../../../types/blocks';

export type PinterestBlockFormData = BlocksFormData &
  Pick<PinterestViewProps, 'pinterestUrl' | 'align' | 'size'>;

type PinterestBlockDataProps =
  BlockDataFormWrapperProps<PinterestBlockFormData>;

const PinterestBlockData = (props: PinterestBlockDataProps) => {
  const { data, block, onChangeBlock, blocksConfig, navRoot, contentType } =
    props;
  const intl = useIntl();
  const schema = pinterestSchema({ intl } satisfies BlockSchemaProps);

  const formData = applySchemaDefaults(schema, data);

  const onChangeField = (id: string, value: unknown) => {
    if (id === 'pinterestUrl' && typeof value === 'string' && value !== '') {
      if (!isValidPinterestUrl(value)) {
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

export default PinterestBlockData;
