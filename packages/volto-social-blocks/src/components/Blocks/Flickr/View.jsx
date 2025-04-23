import React from 'react';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import FlickrView from './DefaultView';

const FlickrBlockView = (props) => {
  const { data } = props;
  return <FlickrView {...data} />;
};

export default withBlockExtensions(FlickrBlockView);
