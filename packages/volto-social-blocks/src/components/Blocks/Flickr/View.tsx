import React from 'react';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import FlickrView from './DefaultView';
import type { FlickrBlockFormData } from './Data';
import type { BlockViewPropsWithData } from '../../../types/blocks';

type Props = BlockViewPropsWithData<FlickrBlockFormData>;

const FlickrBlockView = (props: Props) => {
  const { data, className } = props;
  return <FlickrView {...data} className={className} />;
};

export default withBlockExtensions(FlickrBlockView);
