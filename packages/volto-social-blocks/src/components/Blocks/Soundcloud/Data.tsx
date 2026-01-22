import React from 'react';
import { BlockDataForm } from '@plone/volto/components/manage/Form';
import { applySchemaDefaults, isValidSoundcloudId } from '../../../helpers';
import { soundcloudSchema } from './schema';
import { useIntl } from 'react-intl';
import type { SoundcloudViewProps } from './DefaultView';
import type { BlockSchemaProps, BlocksFormData } from '@plone/types';
import type { BlockDataFormWrapperProps } from '../../../types/blocks';

export type SoundcloudBlockFormData = BlocksFormData &
  Pick<SoundcloudViewProps, 'soundcloudId' | 'align' | 'size'>;

type SoundcloudBlockDataProps =
  BlockDataFormWrapperProps<SoundcloudBlockFormData>;

const SoundcloudBlockData = (props: SoundcloudBlockDataProps) => {
  const { data, block, onChangeBlock, blocksConfig, navRoot, contentType } =
    props;
  const intl = useIntl();
  const schema = soundcloudSchema({ intl } satisfies BlockSchemaProps);

  const formData = applySchemaDefaults(schema, data);

  const onChangeField = (id: string, value: unknown) => {
    if (id === 'soundcloudId' && typeof value === 'string' && value !== '') {
      if (!isValidSoundcloudId(value)) {
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

export default SoundcloudBlockData;
