import React from 'react';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import InstagramView from './DefaultView';

const InstagramBlockView = (props) => {
  const { data, className } = props;
  return <InstagramView {...data} className={className} />;
};

export default withBlockExtensions(InstagramBlockView);
