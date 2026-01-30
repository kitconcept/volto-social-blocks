import React from 'react';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import ThreadsView from './DefaultView';
import type { ThreadsBlockFormData } from './Data';
import type { BlockViewPropsWithData } from '../../../types/blocks';

type Props = BlockViewPropsWithData<ThreadsBlockFormData>;

const ThreadsBlockView = (props: Props) => {
  const { data, className } = props;
  return <ThreadsView {...data} className={className} />;
};

export default withBlockExtensions(ThreadsBlockView);
