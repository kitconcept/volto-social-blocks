import React from 'react';
import { BlockDataForm } from '@plone/volto/components/manage/Form';
import { applySchemaDefaults, isValidMastodonUrl } from '../../../helpers';
import { mastodonSchema } from './schema';
import { useIntl } from 'react-intl';
import type { MastodonViewProps } from './DefaultView';
import type { BlockSchemaProps, BlocksFormData } from '@plone/types';
import type { BlockDataFormWrapperProps } from '../../../types/blocks';

export type MastodonBlockFormData = BlocksFormData &
  Pick<MastodonViewProps, 'mastodonUrl' | 'align' | 'size'>;

type MastodonBlockDataProps = BlockDataFormWrapperProps<MastodonBlockFormData>;

const MastodonBlockData = (props: MastodonBlockDataProps) => {
  const { data, block, onChangeBlock, blocksConfig, navRoot, contentType } =
    props;
  const intl = useIntl();
  const schema = mastodonSchema({ intl } satisfies BlockSchemaProps);

  const formData = applySchemaDefaults(schema, data);

  const onChangeField = (id: string, value: unknown) => {
    if (id === 'mastodonUrl' && typeof value === 'string' && value !== '') {
      if (!isValidMastodonUrl(value)) {
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

export default MastodonBlockData;
