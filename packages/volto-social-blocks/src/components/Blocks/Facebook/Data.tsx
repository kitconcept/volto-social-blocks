import React from 'react';
import { BlockDataForm } from '@plone/volto/components/manage/Form';
import { applySchemaDefaults, isValidFacebookId } from '../../../helpers';
import { facebookSchema } from './schema';
import { useIntl } from 'react-intl';
import type { FacebookViewProps } from './DefaultView';
import type { BlockSchemaProps, BlocksFormData } from '@plone/types';
import type { BlockDataFormWrapperProps } from '../../../types/blocks';

export type FacebookBlockFormData = BlocksFormData &
  Pick<FacebookViewProps, 'facebookId' | 'align' | 'size'>;

type FacebookBlockDataProps = BlockDataFormWrapperProps<FacebookBlockFormData>;

const FacebookBlockData = (props: FacebookBlockDataProps) => {
  const { data, block, onChangeBlock, blocksConfig, navRoot, contentType } =
    props;
  const intl = useIntl();
  const schema = facebookSchema({ intl } satisfies BlockSchemaProps);

  const formData = applySchemaDefaults(schema, data);

  const onChangeField = (id: string, value: unknown) => {
    if (id === 'facebookId' && typeof value === 'string' && value !== '') {
      if (!isValidFacebookId(value)) {
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

export default FacebookBlockData;
