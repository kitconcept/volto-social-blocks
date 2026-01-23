import React from 'react';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import PinterestView from './DefaultView';
import type { PinterestBlockFormData } from './Data';
import type { BlockViewPropsWithData } from '../../../types/blocks';

type Props = BlockViewPropsWithData<PinterestBlockFormData>;

const PinterestBlockView = (props: Props) => {
  const { data, className } = props;
  return <PinterestView {...data} className={className} />;
};

export default withBlockExtensions(PinterestBlockView);
