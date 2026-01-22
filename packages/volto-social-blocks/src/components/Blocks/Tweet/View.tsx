import React from 'react';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import TweetView from './DefaultView';
import type { TweetBlockFormData } from './Data';
import type { BlockViewPropsWithData } from '../../../types/blocks';

type Props = BlockViewPropsWithData<TweetBlockFormData>;

const TweetBlockView = (props: Props) => {
  const { data, className } = props;
  return <TweetView {...data} className={className} />;
};

export default withBlockExtensions(TweetBlockView);
