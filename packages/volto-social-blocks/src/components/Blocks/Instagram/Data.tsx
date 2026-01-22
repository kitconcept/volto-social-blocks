import React from 'react';
import { BlockDataForm } from '@plone/volto/components/manage/Form';
import { applySchemaDefaults, isValidInstagramId } from '../../../helpers';
import { instagramSchema } from './schema';
import { useIntl } from 'react-intl';
import type { InstagramViewProps } from './DefaultView';
import type { BlockSchemaProps, BlocksFormData } from '@plone/types';
import type { BlockDataFormWrapperProps } from '../../../types/blocks';

export type InstagramBlockFormData = BlocksFormData &
  Pick<InstagramViewProps, 'instagramId' | 'align' | 'size' | 'captioned'>;

type InstagramBlockDataProps =
  BlockDataFormWrapperProps<InstagramBlockFormData>;

const InstagramBlockData = (props: InstagramBlockDataProps) => {
  const { data, block, onChangeBlock, blocksConfig, navRoot, contentType } =
    props;
  const intl = useIntl();
  const schema = instagramSchema({ intl } satisfies BlockSchemaProps);

  const formData = applySchemaDefaults(schema, data);

  const onChangeField = (id: string, value: unknown) => {
    if (id === 'instagramId' && typeof value === 'string' && value !== '') {
      if (!isValidInstagramId(value)) {
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

export default InstagramBlockData;
