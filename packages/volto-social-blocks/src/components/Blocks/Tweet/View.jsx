import React from 'react';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import TweetView from './DefaultView';

const TweetBlockView = (props) => {
  const { data, className } = props;
  return <TweetView {...data} className={className} />;
};

export default withBlockExtensions(TweetBlockView);
