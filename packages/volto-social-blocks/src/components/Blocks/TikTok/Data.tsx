import React from 'react';
import { BlockDataForm } from '@plone/volto/components/manage/Form';
import { applySchemaDefaults, isValidTikTokUrl } from '../../../helpers';
import { tiktokSchema } from './schema';
import { useIntl } from 'react-intl';
import type { TikTokViewProps } from './DefaultView';
import type { BlockSchemaProps, BlocksFormData } from '@plone/types';
import type { BlockDataFormWrapperProps } from '../../../types/blocks';

export type TikTokBlockFormData = BlocksFormData &
  Pick<TikTokViewProps, 'tiktokUrl' | 'align' | 'size'>;

type TikTokBlockDataProps = BlockDataFormWrapperProps<TikTokBlockFormData>;

const TikTokBlockData = (props: TikTokBlockDataProps) => {
  const { data, block, onChangeBlock, blocksConfig, navRoot, contentType } =
    props;
  const intl = useIntl();
  const schema = tiktokSchema({ intl } satisfies BlockSchemaProps);

  const formData = applySchemaDefaults(schema, data);

  const onChangeField = (id: string, value: unknown) => {
    if (id === 'tiktokUrl' && typeof value === 'string' && value !== '') {
      if (!isValidTikTokUrl(value)) {
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

export default TikTokBlockData;
