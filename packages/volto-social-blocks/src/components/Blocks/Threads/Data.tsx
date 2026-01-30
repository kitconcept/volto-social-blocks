import React from 'react';
import { BlockDataForm } from '@plone/volto/components/manage/Form';
import { applySchemaDefaults, isValidThreadsUrl } from '../../../helpers';
import { threadsSchema } from './schema';
import { useIntl } from 'react-intl';
import type { ThreadsViewProps } from './DefaultView';
import type { BlockSchemaProps, BlocksFormData } from '@plone/types';
import type { BlockDataFormWrapperProps } from '../../../types/blocks';

export type ThreadsBlockFormData = BlocksFormData &
  Pick<ThreadsViewProps, 'threadsUrl' | 'align' | 'size'>;

type ThreadsBlockDataProps = BlockDataFormWrapperProps<ThreadsBlockFormData>;

const ThreadsBlockData = (props: ThreadsBlockDataProps) => {
  const { data, block, onChangeBlock, blocksConfig, navRoot, contentType } =
    props;
  const intl = useIntl();
  const schema = threadsSchema({ intl } satisfies BlockSchemaProps);

  const formData = applySchemaDefaults(schema, data);

  const onChangeField = (id: string, value: unknown) => {
    if (id === 'threadsUrl' && typeof value === 'string' && value !== '') {
      if (!isValidThreadsUrl(value)) {
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

export default ThreadsBlockData;
