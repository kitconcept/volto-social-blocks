import React from 'react';
import { BlockDataForm } from '@plone/volto/components/manage/Form';
import { tweetSchema } from './schema';
import { useIntl } from 'react-intl';
import { applySchemaDefaults } from '../../../helpers';
import type { TweetViewProps } from './DefaultView';
import type { BlockSchemaProps, BlocksFormData } from '@plone/types';
import type { BlockDataFormWrapperProps } from '../../../types/blocks';

export type TweetBlockFormData = BlocksFormData &
  Pick<TweetViewProps, 'tweetId' | 'align' | 'size' | 'theme' | 'lang' | 'dnt'>;

type TweetBlockDataProps = BlockDataFormWrapperProps<TweetBlockFormData>;

const TweetBlockData = (props: TweetBlockDataProps) => {
  const { data, block, onChangeBlock, blocksConfig, navRoot, contentType } =
    props;
  const intl = useIntl();
  const schema = tweetSchema({ intl } satisfies BlockSchemaProps);

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

export default TweetBlockData;
