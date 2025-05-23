import React from 'react';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import SpotifyView from './DefaultView';

const SpotifyBlockView = (props) => {
  const { data, className } = props;
  return <SpotifyView {...data} className={className} />;
};

export default withBlockExtensions(SpotifyBlockView);
