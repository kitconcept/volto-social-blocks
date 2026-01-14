import React from 'react';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import FacebookView from './DefaultView';

type Props = {
  data: Record<string, unknown>;
  className?: string;
};

const FacebookBlockView = (props: Props) => {
  const { data, className } = props;
  return <FacebookView {...(data as any)} className={className} />;
};

export default withBlockExtensions(FacebookBlockView as any);
