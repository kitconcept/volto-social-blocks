import React from 'react';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import LinkedInView from './DefaultView';

const LinkedInBlockView = (props) => {
  const { data, className } = props;
  return <LinkedInView {...data} className={className} />;
};

export default withBlockExtensions(LinkedInBlockView);
