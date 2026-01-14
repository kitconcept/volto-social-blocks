import React from 'react';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import FlickrView from './DefaultView';

type Props = {
  data: Record<string, unknown>;
  className?: string;
};

const FlickrBlockView = (props: Props) => {
  const { data, className } = props;
  return <FlickrView {...(data as any)} className={className} />;
};

export default withBlockExtensions(FlickrBlockView as any);
