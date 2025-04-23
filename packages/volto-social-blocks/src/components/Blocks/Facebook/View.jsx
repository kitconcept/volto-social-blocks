import React from 'react';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import FacebookView from './DefaultView';

const FacebookBlockView = (props) => {
  const { data, className } = props;
  return <FacebookView {...data} className={className} />;
};

export default withBlockExtensions(FacebookBlockView);
