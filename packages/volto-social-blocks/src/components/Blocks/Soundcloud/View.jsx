import React from 'react';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import SoundcloudView from './DefaultView';

const SoundcloudBlockView = (props) => {
  const { data, className } = props;
  return <SoundcloudView {...data} className={className} />;
};

export default withBlockExtensions(SoundcloudBlockView);
