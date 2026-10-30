import React from 'react';
import { BlockDataForm } from '@plone/volto/components/manage/Form';
import config from '@plone/volto/registry';
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
    blocksConfig?.[data['@type']]?.blockSchema ?? twitchSchema;
  const schema =
    typeof blockSchema === 'function'
      ? blockSchema({ ...props, intl: schemaIntl })
      : blockSchema;

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
      errors={blocksErrors}
    />
  );
};

export default TwitchBlockData;
