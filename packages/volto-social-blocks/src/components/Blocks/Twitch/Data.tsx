import React from 'react';
import { BlockDataForm } from '@plone/volto/components/manage/Form';
import { applySchemaDefaults, isValidTwitchUrl } from '../../../helpers';
import { twitchSchema } from './schema';
import { useIntl } from 'react-intl';
import type { TwitchViewProps } from './DefaultView';
import type { BlockSchemaProps, BlocksFormData } from '@plone/types';
import type { BlockDataFormWrapperProps } from '../../../types/blocks';

export type TwitchBlockFormData = BlocksFormData &
  Pick<TwitchViewProps, 'twitchUrl' | 'showChat' | 'align' | 'size'>;

type TwitchBlockDataProps = BlockDataFormWrapperProps<TwitchBlockFormData>;

const TwitchBlockData = (props: TwitchBlockDataProps) => {
  const { data, block, onChangeBlock, blocksConfig, navRoot, contentType } =
    props;
  const intl = useIntl();
  const schema = twitchSchema({ intl } satisfies BlockSchemaProps);

  const formData = applySchemaDefaults(schema, data);

  const onChangeField = (id: string, value: unknown) => {
    if (id === 'twitchUrl' && typeof value === 'string' && value !== '') {
      if (!isValidTwitchUrl(value)) {
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

export default TwitchBlockData;
