import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers';
import FacebookView from './DefaultView';

const FacebookBlockView = (props) => {
  const { data } = props;
  return <FacebookView {...data} />;
};

export default withBlockExtensions(FacebookBlockView);
