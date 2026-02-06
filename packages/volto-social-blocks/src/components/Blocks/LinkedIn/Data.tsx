import React from 'react';
import { BlockDataForm } from '@plone/volto/components/manage/Form';
import { linkedinSchema } from './schema';
import { useIntl } from 'react-intl';
import { applySchemaDefaults } from '../../../helpers';
import type { LinkedInViewProps } from './DefaultView';
import type { BlockSchemaProps, BlocksFormData } from '@plone/types';
import type { BlockDataFormWrapperProps } from '../../../types/blocks';

export type LinkedInBlockFormData = BlocksFormData &
  Pick<LinkedInViewProps, 'postURL' | 'styles'>;

type LinkedInBlockDataProps = BlockDataFormWrapperProps<LinkedInBlockFormData>;

const LinkedInBlockData = (props: LinkedInBlockDataProps) => {
  const { data, block, onChangeBlock, blocksConfig, navRoot, contentType } =
    props;
  const intl = useIntl();
  const schema = linkedinSchema({ intl } satisfies BlockSchemaProps);

  const formData = applySchemaDefaults(schema, data);

  const onChangeField = (id: string, value: unknown) => {
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

export default LinkedInBlockData;
