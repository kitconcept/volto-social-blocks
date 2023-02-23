import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers';
import TweetView from './DefaultView';

const TweetBlockView = (props) => {
  const { data } = props;
  return <TweetView {...data} />;
};

export default withBlockExtensions(TweetBlockView);
