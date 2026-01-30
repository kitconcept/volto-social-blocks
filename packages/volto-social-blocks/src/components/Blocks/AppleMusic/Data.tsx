import React from 'react';
import { BlockDataForm } from '@plone/volto/components/manage/Form';
import { applySchemaDefaults, isValidAppleMusicUrl } from '../../../helpers';
import { appleMusicSchema } from './schema';
import { useIntl } from 'react-intl';
import type { AppleMusicViewProps } from './DefaultView';
import type { BlockSchemaProps, BlocksFormData } from '@plone/types';
import type { BlockDataFormWrapperProps } from '../../../types/blocks';

export type AppleMusicBlockFormData = BlocksFormData &
  Pick<AppleMusicViewProps, 'appleMusicUrl' | 'align' | 'size'>;

type AppleMusicBlockDataProps = BlockDataFormWrapperProps<AppleMusicBlockFormData>;

const AppleMusicBlockData = (props: AppleMusicBlockDataProps) => {
  const { data, block, onChangeBlock, blocksConfig, navRoot, contentType } =
    props;
  const intl = useIntl();
  const schema = appleMusicSchema({ intl } satisfies BlockSchemaProps);

  const formData = applySchemaDefaults(schema, data);

  const onChangeField = (id: string, value: unknown) => {
    if (id === 'appleMusicUrl' && typeof value === 'string' && value !== '') {
      if (!isValidAppleMusicUrl(value)) {
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

export default AppleMusicBlockData;
