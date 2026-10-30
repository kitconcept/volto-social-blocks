import React from 'react';
import { BlockDataForm } from '@plone/volto/components/manage/Form';
import config from '@plone/volto/registry';
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
  const {
    data,
    block,
    onChangeBlock,
    blocksConfig = config.blocks.blocksConfig,
    blocksErrors,
    navRoot,
    contentType,
  } = props;
  const intl = useIntl();
  // `@plone/types` declares `IntlShape['messages']` more narrowly than the
  // `react-intl` Volto ships. Cast until that is fixed upstream.
  const schemaIntl = intl as BlockSchemaProps['intl'];
  const blockSchema =
    blocksConfig?.[data['@type']]?.blockSchema ?? linkedinSchema;
  const schema =
    typeof blockSchema === 'function'
      ? blockSchema({ ...props, intl: schemaIntl })
      : blockSchema;

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
      errors={blocksErrors}
    />
  );
};

export default LinkedInBlockData;
