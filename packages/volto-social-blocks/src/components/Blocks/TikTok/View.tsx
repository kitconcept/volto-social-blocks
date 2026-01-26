import React from 'react';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import TikTokView from './DefaultView';
import type { TikTokBlockFormData } from './Data';
import type { BlockViewPropsWithData } from '../../../types/blocks';

type Props = BlockViewPropsWithData<TikTokBlockFormData>;

const TikTokBlockView = (props: Props) => {
  const { data, className } = props;
  return <TikTokView {...data} className={className} />;
};

export default withBlockExtensions(TikTokBlockView);
