import React from 'react';
import { BlockDataForm } from '@plone/volto/components/manage/Form';
import { applySchemaDefaults, isValidSpotifyId } from '../../../helpers';
import { spotifySchema } from './schema';
import { useIntl } from 'react-intl';
import type { SpotifyViewProps } from './DefaultView';
import type { BlockSchemaProps, BlocksFormData } from '@plone/types';
import type { BlockDataFormWrapperProps } from '../../../types/blocks';

export type SpotifyBlockFormData = BlocksFormData &
  Pick<SpotifyViewProps, 'spotifyId' | 'align' | 'size'>;

type SpotifyBlockDataProps = BlockDataFormWrapperProps<SpotifyBlockFormData>;

const SpotifyBlockData = (props: SpotifyBlockDataProps) => {
  const { data, block, onChangeBlock, blocksConfig, navRoot, contentType } =
    props;
  const intl = useIntl();
  const schema = spotifySchema({ intl } satisfies BlockSchemaProps);

  const formData = applySchemaDefaults(schema, data);

  const onChangeField = (id: string, value: unknown) => {
    if (id === 'spotifyId' && typeof value === 'string' && value !== '') {
      if (!isValidSpotifyId(value)) {
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

export default SpotifyBlockData;
