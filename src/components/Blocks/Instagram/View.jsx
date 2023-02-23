import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers';
import InstagramView from './DefaultView';

const InstagramBlockView = (props) => {
  const { data } = props;
  return <InstagramView {...data} />;
};

export default withBlockExtensions(InstagramBlockView);
